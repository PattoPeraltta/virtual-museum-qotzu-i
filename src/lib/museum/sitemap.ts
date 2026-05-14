import type { SitemapNode, BreadcrumbItem } from './types';

export const museumSitemap: SitemapNode[] = [
  {
    id: '1',
    slug: 'lake-poopo',
    title: 'Lake Poopó',
    shortTitle: 'Lake Poopó',
    description: 'The role, science, contamination, and global parallels of Lake Poopó.',
    children: [
      {
        id: '1a',
        slug: 'social-overview',
        title: 'Social Overview',
        description: 'The lifeblood of the Altiplano and its role in the region.',
      },
      {
        id: '1b',
        slug: 'scientific-overview',
        title: 'Scientific Overview',
        description: 'Hydrology, climate, and the desiccation of Lake Poopó.',
      },
      {
        id: '1c',
        slug: 'mining-contamination',
        title: 'Mining & Contamination',
        description: 'The Bolivian Tin Belt and its devastating impact on the lake.',
      },
      {
        id: '1d',
        slug: 'global-parallels',
        title: 'Global Parallels',
        description: 'Disappearing lakes worldwide and the communities affected.',
      },
    ],
  },
  {
    id: '2',
    slug: 'about-urus',
    title: 'About the Urus',
    shortTitle: 'The Urus',
    description: 'Language, ways of life, resilience, and political context of the Uru Nation.',
    children: [
      {
        id: '2a',
        slug: 'language',
        title: 'Language',
        description: 'Uchumataqu, Chholo, and the revival of Pukina.',
      },
      {
        id: '2b',
        slug: 'ways-of-life',
        title: 'Ways of Life',
        description: 'Artisanship, adaptation, leadership, cosmology, and spirituality.',
        children: [
          {
            id: '2b-i',
            slug: 'leadership-gender',
            title: 'Leadership Structure & Gender',
            description: 'The shifting role of women and cooperative governance.',
          },
          {
            id: '2b-ii',
            slug: 'cosmology-spirituality',
            title: 'Cosmology & Spirituality',
            description: 'Qotamama, jalsuris, and the sacred relationship with water.',
          },
        ],
      },
      {
        id: '2c',
        slug: 'resilience',
        title: 'Resilience',
        description: 'How the Uru communities adapt and persist.',
      },
      {
        id: '2d',
        slug: 'political-legal-context',
        title: 'Political & Legal Context',
        description: 'Mining policy, indigenous rights, and Bolivia\'s political transitions.',
      },
    ],
  },
  {
    id: '3',
    slug: 'impact-project',
    title: 'Qotzuñi Impact Project',
    shortTitle: 'Impact Project',
    description: 'Global awareness, local impact, ethics, and how to help.',
    children: [
      {
        id: '3a',
        slug: 'global-awareness',
        title: 'Global Awareness Campaign',
        description: 'Spreading the story of the Uru communities worldwide.',
      },
      {
        id: '3b',
        slug: 'local-impact',
        title: 'Local Impact Campaign',
        description: 'Material change on the ground through partnerships.',
      },
      {
        id: '3c',
        slug: 'ethics-reciprocity',
        title: 'Ethics & Reciprocity',
        description: 'Rejecting extractivist documentary filmmaking.',
      },
      {
        id: '3d',
        slug: 'how-to-help',
        title: 'How to Help',
        description: 'Direct support for the Uru communities.',
      },
      {
        id: '3e',
        slug: 'contact',
        title: 'Contact Information',
        description: 'Get in touch with the Qotzuñi project.',
      },
    ],
  },
  {
    id: '4',
    slug: 'resources',
    title: 'Resources',
    shortTitle: 'Resources',
    description: 'Documentary, photography, thesis, bibliography, and related projects.',
    children: [
      {
        id: '4a',
        slug: 'documentary',
        title: 'Documentary',
        description: 'Qotzuñi: People of the Lake — the film.',
      },
      {
        id: '4b',
        slug: 'photography',
        title: 'Photography',
        description: 'Photographic series by Gastón Zilberman.',
      },
      {
        id: '4c',
        slug: 'thesis',
        title: 'Thesis',
        description: 'Fluid Identities: Political Hydrohistory of the Urus of Lake Poopó.',
      },
      {
        id: '4d',
        slug: 'bibliography',
        title: 'Bibliography & Publications',
        description: 'Academic research, news, and institutional reports.',
      },
      {
        id: '4e',
        slug: 'other-projects',
        title: 'Other Projects',
        description: 'Language revival, other documentaries, WFP, and Ramsar.',
      },
    ],
  },
];

export const interactiveMapNode: SitemapNode = {
  id: 'map',
  slug: 'interactive-map',
  title: 'Interactive Map',
  shortTitle: 'Map',
  description: 'Explore communities, biodiversity, and the shrinking of Lake Poopó.',
};

function flattenNodes(nodes: SitemapNode[], parentPath = '/museum'): Array<{ node: SitemapNode; path: string; parents: BreadcrumbItem[] }> {
  const result: Array<{ node: SitemapNode; path: string; parents: BreadcrumbItem[] }> = [];

  for (const node of nodes) {
    const path = `${parentPath}/${node.slug}`;
    const parents: BreadcrumbItem[] = [{ label: 'Museum', href: '/museum' }];

    result.push({ node, path, parents });

    if (node.children) {
      const childResults = flattenNodes(node.children, path);
      for (const child of childResults) {
        child.parents = [
          ...parents,
          { label: node.title, href: path },
          ...child.parents.slice(1),
        ];
        result.push(child);
      }
    }
  }

  return result;
}

const flatMap = flattenNodes(museumSitemap);

export function resolveSlug(slugParts: string[]): { node: SitemapNode; path: string; parents: BreadcrumbItem[] } | null {
  const targetPath = `/museum/${slugParts.join('/')}`;
  return flatMap.find((entry) => entry.path === targetPath) ?? null;
}

export function getTopLevelSections(): Array<{ node: SitemapNode; path: string }> {
  return museumSitemap.map((node) => ({
    node,
    path: `/museum/${node.slug}`,
  }));
}

export function getSectionChildren(parentSlug: string): Array<{ node: SitemapNode; path: string }> | null {
  const parent = museumSitemap.find((n) => n.slug === parentSlug);
  if (!parent?.children) return null;
  return parent.children.map((child) => ({
    node: child,
    path: `/museum/${parentSlug}/${child.slug}`,
  }));
}

export function getAllSections(): Array<{ node: SitemapNode; path: string; parents: BreadcrumbItem[] }> {
  return flatMap;
}

export function getBreadcrumbs(slugParts: string[]): BreadcrumbItem[] {
  const resolved = resolveSlug(slugParts);
  if (!resolved) return [{ label: 'Museum', href: '/museum' }];
  return [...resolved.parents, { label: resolved.node.title, href: resolved.path }];
}
