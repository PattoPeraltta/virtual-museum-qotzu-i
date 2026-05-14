import type { SectionContent } from './types';

const contentModules: Record<string, () => Promise<{ default: SectionContent }>> = {
  '1a': () => import('@/content/museum/1a-social-overview'),
  '1b': () => import('@/content/museum/1b-scientific-overview'),
  '1c': () => import('@/content/museum/1c-mining-contamination'),
  '1d': () => import('@/content/museum/1d-global-parallels'),
  '2a': () => import('@/content/museum/2a-language'),
  '2b': () => import('@/content/museum/2b-ways-of-life'),
  '2b-i': () => import('@/content/museum/2b-i-leadership-gender'),
  '2b-ii': () => import('@/content/museum/2b-ii-cosmology-spirituality'),
  '2c': () => import('@/content/museum/2c-resilience'),
  '2d': () => import('@/content/museum/2d-political-legal-context'),
  '3a': () => import('@/content/museum/3a-global-awareness'),
  '3b': () => import('@/content/museum/3b-local-impact'),
  '3c': () => import('@/content/museum/3c-ethics-reciprocity'),
  '3d': () => import('@/content/museum/3d-how-to-help'),
  '3e': () => import('@/content/museum/3e-contact'),
  '4a': () => import('@/content/museum/4a-documentary'),
  '4b': () => import('@/content/museum/4b-photography'),
  '4c': () => import('@/content/museum/4c-thesis'),
  '4d': () => import('@/content/museum/4d-bibliography'),
  '4e': () => import('@/content/museum/4e-other-projects'),
};

export async function getSectionContent(sectionId: string): Promise<SectionContent | null> {
  const loader = contentModules[sectionId];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}

export function hasSectionContent(sectionId: string): boolean {
  return sectionId in contentModules;
}

export function getSectionOverview(parentId: string): string[] {
  return Object.keys(contentModules).filter((key) => key.startsWith(parentId));
}
