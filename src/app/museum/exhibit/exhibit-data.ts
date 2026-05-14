import fs from 'node:fs/promises';
import path from 'node:path';

export interface Exhibit {
  id: number;
  title: string;
  description: string;
  images: string[];
  imageCaptions: string[];
  links: Array<{ title: string; url: string }>;
}

export interface StorySectionData {
  title: string;
  subtitle?: string;
  contentHtml: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
  deeperContent?: Array<{ title: string; contentHtml: string }>;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  deeperInfo?: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
}

export interface ExhibitPageData {
  exhibit: Exhibit;
  heroDescription: string;
  storySections: StorySectionData[];
  timelineEvents: TimelineEvent[];
  stats: Stat[];
  galleryItems: GalleryItem[];
}

const decodeEntities = (value: string) =>
  value
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');

const stripHtml = (value: string) =>
  decodeEntities(value.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();

const buildExcerpt = (value: string, limit = 220) => {
  const text = stripHtml(value);
  if (!text) {
    return '';
  }
  if (text.length <= limit) {
    return text;
  }
  return `${text.slice(0, limit).trim()}...`;
};

const splitParagraphs = (html: string) =>
  html
    .replace(/\r/g, '')
    .split(/<br\s*\/?\s*>\s*<br\s*\/?\s*>/i)
    .map((section) => section.trim())
    .filter(Boolean);

const extractHeading = (html: string) => {
  const trimmed = html.trim();
  const match = trimmed.match(
    /^<(?:b|strong)>(.*?)<\/\s*(?:b|strong)>\s*(?:<br\s*\/?\s*>)*\s*/i
  );

  if (!match) {
    return { heading: undefined, body: trimmed };
  }

  return {
    heading: match[1].trim(),
    body: trimmed.slice(match[0].length).trim(),
  };
};

const splitSentences = (text: string) => {
  const matches = text.match(/[^.!?]+[.!?]+/g);
  if (!matches) {
    return [text];
  }
  const joinedLength = matches.reduce((total, sentence) => total + sentence.length, 0);
  if (joinedLength < text.length) {
    matches.push(text.slice(joinedLength));
  }
  return matches.map((sentence) => sentence.trim()).filter(Boolean);
};

const parseMuseumText = (text: string): Exhibit[] => {
  const parsed: Exhibit[] = [];
  const sections = text.split(/\{EXHIBIT-\d+\}/).filter((section) => section.trim());

  sections.forEach((section, index) => {
    const lines = section.trim().split('\n');
    const title = lines[0]?.trim() ?? `Exhibit ${index + 1}`;

    const imageListIndex = lines.findIndex((line) => line.trim().toLowerCase().includes('images:'));
    const linksIndex = lines.findIndex((line) => line.trim().toLowerCase().includes('links:'));

    const firstSectionIndex = Math.min(
      imageListIndex !== -1 ? imageListIndex : Infinity,
      linksIndex !== -1 ? linksIndex : Infinity
    );

    const description = lines.slice(1, firstSectionIndex).join('\n').trim();

    let imageList: string[] = [];
    let imageCaptions: string[] = [];
    if (imageListIndex !== -1) {
      const nextSectionIndex = linksIndex !== -1 ? linksIndex : Infinity;
      const imageLines = lines
        .slice(imageListIndex + 1, nextSectionIndex)
        .filter((line) => line.trim());

      imageLines.forEach((line) => {
        const parts = line.trim().split(/\s*,\s*/);
        const url = parts[0].trim();
        const caption = parts.slice(1).join(',').trim();

        if (url.startsWith('/images/')) {
          imageList.push(url);
          imageCaptions.push(caption || '');
        }
      });
    }

    if (imageList.length === 0) {
      imageList = [`/images/exhibit${index + 1}-placeholder.jpg`];
      imageCaptions = [''];
    }

    let links: Array<{ title: string; url: string }> = [];
    if (linksIndex !== -1) {
      links = lines
        .slice(linksIndex + 1)
        .filter((line) => line.trim().includes('!'))
        .map((line) => {
          const [linkTitle, url] = line.trim().split('!').map((entry) => entry.trim());
          return { title: linkTitle, url };
        });
    }

    parsed.push({
      id: index + 1,
      title,
      description,
      images: imageList,
      imageCaptions,
      links,
    });
  });

  return parsed;
};

const buildStorySections = (exhibit: Exhibit, paragraphs: string[]): StorySectionData[] => {
  const sections: StorySectionData[] = paragraphs.map((paragraph, index) => {
    const { heading, body } = extractHeading(paragraph);
    const title = heading ?? (index === 0 ? exhibit.title : `Focus ${index + 1}`);
    const contentHtml = body || paragraph;
    const imageUrl = exhibit.images[index % exhibit.images.length];

    return {
      title,
      contentHtml,
      imageUrl,
      imagePosition: index % 2 === 0 ? 'right' : 'left',
    };
  });

  if (sections.length > 0 && exhibit.links.length > 0) {
    const lastSection = sections[sections.length - 1];
    lastSection.deeperContent = exhibit.links.map((link) => ({
      title: link.title,
      contentHtml: `<a class="museum-link" href="${link.url}" target="_blank" rel="noreferrer">${link.url}</a>`,
    }));
  }

  return sections;
};

const buildTimelineEvents = (exhibit: Exhibit, paragraphs: string[]): TimelineEvent[] =>
  paragraphs.slice(0, 5).map((paragraph, index) => {
    const { heading, body } = extractHeading(paragraph);
    const text = stripHtml(body || paragraph);
    const sentences = splitSentences(text);
    const description = sentences[0] ?? text;
    const deeperInfo = sentences.length > 1 ? sentences.slice(1).join(' ') : undefined;

    return {
      year: `Focus ${String(index + 1).padStart(2, '0')}`,
      title: heading ?? (index === 0 ? exhibit.title : `Insight ${index + 1}`),
      description: description.length > 180 ? `${description.slice(0, 180).trim()}...` : description,
      deeperInfo,
    };
  });

const buildStats = (exhibit: Exhibit, paragraphs: string[]): Stat[] => {
  const wordCount = stripHtml(exhibit.description).split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.round(wordCount / 180));

  return [
    {
      value: exhibit.images.length,
      suffix: '',
      label: 'Archival Images',
      description: 'Curated visuals tied to this exhibit.',
    },
    {
      value: exhibit.links.length,
      suffix: '',
      label: 'Research Sources',
      description: 'External references and documentation.',
    },
    {
      value: paragraphs.length,
      suffix: '',
      label: 'Narrative Threads',
      description: 'Primary passages in this exhibit.',
    },
    {
      value: readTime,
      suffix: ' min',
      label: 'Reading Time',
      description: 'Estimated time to read this exhibit.',
    },
  ];
};

const buildGalleryItems = (exhibit: Exhibit): GalleryItem[] =>
  exhibit.images.map((image, index) => {
    const caption = exhibit.imageCaptions[index]?.trim();
    const title = caption
      ? caption.split('.').shift()?.trim() || caption
      : `${exhibit.title} - Plate ${index + 1}`;

    return {
      id: index + 1,
      title,
      description: caption || `Visual record from the ${exhibit.title} exhibit.`,
      category: `Exhibit ${String(exhibit.id).padStart(2, '0')}`,
      imageUrl: image,
    };
  });

export async function getExhibitData(exhibitId: number): Promise<ExhibitPageData | null> {
  const filePath = path.join(process.cwd(), 'public', 'museum.txt');
  const text = await fs.readFile(filePath, 'utf8');
  const exhibits = parseMuseumText(text);
  const exhibit = exhibits.find((item) => item.id === exhibitId);

  if (!exhibit) {
    return null;
  }

  const paragraphs = splitParagraphs(exhibit.description);
  const resolvedParagraphs = paragraphs.length > 0 ? paragraphs : [exhibit.description];
  const heroDescription = buildExcerpt(resolvedParagraphs[0] ?? exhibit.description, 220);

  return {
    exhibit,
    heroDescription,
    storySections: buildStorySections(exhibit, resolvedParagraphs),
    timelineEvents: buildTimelineEvents(exhibit, resolvedParagraphs),
    stats: buildStats(exhibit, resolvedParagraphs),
    galleryItems: buildGalleryItems(exhibit),
  };
}
