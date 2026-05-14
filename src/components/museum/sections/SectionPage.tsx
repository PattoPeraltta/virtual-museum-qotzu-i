'use client';

import Link from 'next/link';
import ContentRenderer, { MediaGallery, ExternalLinks, CitationsList } from './ContentRenderer';
import type { SectionContent, BreadcrumbItem, SitemapNode } from '@/lib/museum/types';

interface SectionPageProps {
  content: SectionContent;
  breadcrumbs: BreadcrumbItem[];
  childSections?: SitemapNode[];
  childrenBasePath?: string;
}

export default function SectionPage({ content, breadcrumbs, childSections, childrenBasePath }: SectionPageProps) {
  return (
    <article className="min-h-screen">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="pt-6 pb-4 px-4 md:px-8 max-w-5xl mx-auto">
        <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          {breadcrumbs.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-2">
              {i > 0 && <span className="text-gray-700">/</span>}
              {i < breadcrumbs.length - 1 ? (
                <Link href={crumb.href} className="hover:text-[#d4af37] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-300">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Hero */}
      <header className="pt-8 pb-12 px-4 md:px-8 max-w-5xl mx-auto">
        {content.subtitle && (
          <p className="text-[#d4af37]/60 tracking-[0.3em] uppercase text-sm mb-4">{content.subtitle}</p>
        )}
        <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-6">
          <span className="text-gold-gradient glow-gold-text">{content.title}</span>
        </h1>
        <div className="w-24 h-px bg-gradient-to-r from-[#d4af37] to-transparent mb-6" />
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-3xl">
          {content.summary}
        </p>
      </header>

      {/* Subsection index */}
      {childSections && childSections.length > 0 && childrenBasePath && (
        <div className="px-4 md:px-8 max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {childSections.map((child) => (
              <Link
                key={child.id}
                href={`${childrenBasePath}/${child.slug}`}
                className="group p-5 border border-white/10 rounded-lg hover:border-[#d4af37]/30 hover:bg-white/[0.02] transition-all duration-300"
              >
                <h3 className="text-lg font-light text-white group-hover:text-[#d4af37] transition-colors mb-1">
                  {child.title}
                </h3>
                {child.description && (
                  <p className="text-sm text-gray-500 leading-relaxed">{child.description}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Content blocks */}
      <div className="px-4 md:px-8 max-w-5xl mx-auto pb-8">
        <ContentRenderer blocks={content.blocks} />
      </div>

      {/* Media gallery */}
      {content.media.length > 0 && (
        <div className="px-4 md:px-8 max-w-5xl mx-auto">
          <MediaGallery media={content.media} />
        </div>
      )}

      {/* External links */}
      {content.links.length > 0 && (
        <div className="px-4 md:px-8 max-w-5xl mx-auto">
          <ExternalLinks links={content.links} />
        </div>
      )}

      {/* Citations */}
      {content.citations.length > 0 && (
        <div className="px-4 md:px-8 max-w-5xl mx-auto">
          <CitationsList citations={content.citations} />
        </div>
      )}

      {/* Related sections */}
      {content.relatedSections && content.relatedSections.length > 0 && (
        <div className="px-4 md:px-8 max-w-5xl mx-auto py-12">
          <h3 className="text-sm uppercase tracking-[0.2em] text-[#d4af37]/60 mb-4">Continue Exploring</h3>
          <div className="flex flex-wrap gap-3">
            {content.relatedSections.map((sectionId) => (
              <span key={sectionId} className="text-sm text-gray-500 px-3 py-1 border border-white/10 rounded">
                Section {sectionId.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Back to museum */}
      <div className="px-4 md:px-8 max-w-5xl mx-auto pb-16">
        <Link
          href="/museum"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#d4af37] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Museum
        </Link>
      </div>
    </article>
  );
}
