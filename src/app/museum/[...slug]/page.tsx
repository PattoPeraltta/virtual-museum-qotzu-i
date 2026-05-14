import { notFound } from 'next/navigation';
import { resolveSlug, getBreadcrumbs, getAllSections } from '@/lib/museum/sitemap';
import { getSectionContent } from '@/lib/museum/content';
import SectionPage from '@/components/museum/sections/SectionPage';
import SectionIndex from './SectionIndex';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const all = getAllSections();
  return all.map((entry) => ({
    slug: entry.path.replace('/museum/', '').split('/'),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const resolved = resolveSlug(slug);
  if (!resolved) return { title: 'Not Found' };
  return {
    title: resolved.node.title,
    description: resolved.node.description,
  };
}

export default async function MuseumSectionPage({ params }: PageProps) {
  const { slug } = await params;
  const resolved = resolveSlug(slug);
  if (!resolved) notFound();

  const { node, path } = resolved;
  const breadcrumbs = getBreadcrumbs(slug);
  const content = await getSectionContent(node.id);

  if (!content) {
    return (
      <SectionIndex
        node={node}
        path={path}
        breadcrumbs={breadcrumbs}
      />
    );
  }

  return (
    <SectionPage
      content={content}
      breadcrumbs={breadcrumbs}
      childSections={node.children}
      childrenBasePath={path}
    />
  );
}
