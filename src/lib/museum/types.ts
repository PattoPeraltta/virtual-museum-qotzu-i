export interface SitemapNode {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  description?: string;
  children?: SitemapNode[];
}

export interface ContentBlock {
  type: 'text' | 'heading' | 'quote' | 'media' | 'links' | 'citation' | 'audio';
  content?: string;
  htmlContent?: string;
  level?: 1 | 2 | 3;
  source?: string;
  items?: MediaItem[] | ExternalLink[] | Citation[];
}

export interface MediaItem {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  type: 'image' | 'video' | 'audio' | 'document';
}

export interface ExternalLink {
  title: string;
  url: string;
  description?: string;
}

export interface Citation {
  text: string;
  url?: string;
  authors?: string;
  year?: string;
}

export interface SectionContent {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;
  blocks: ContentBlock[];
  media: MediaItem[];
  links: ExternalLink[];
  citations: Citation[];
  relatedSections?: string[];
}

export interface MapCommunity {
  name: string;
  coordinates: [number, number];
  description: string;
  population?: string;
  sectionLink?: string;
  pois?: MapPOI[];
}

export interface MapPOI {
  name: string;
  coordinates: [number, number];
  type: string;
  description: string;
}

export interface TimeseriesEntry {
  year: number;
  value: number;
  label?: string;
  description?: string;
}

export interface TimelineMapEvent {
  year: number;
  title: string;
  description: string;
  coordinates?: [number, number];
  zoom?: number;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
