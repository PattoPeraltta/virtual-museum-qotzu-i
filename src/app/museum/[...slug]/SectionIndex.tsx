import Link from 'next/link';
import type { SitemapNode, BreadcrumbItem } from '@/lib/museum/types';

interface SectionIndexProps {
  node: SitemapNode;
  path: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function SectionIndex({ node, path, breadcrumbs }: SectionIndexProps) {
  return (
    <div className="min-h-screen">
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

      {/* Header */}
      <header className="pt-8 pb-12 px-4 md:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4">
          <span className="text-gold-gradient glow-gold-text">{node.title}</span>
        </h1>
        <div className="w-24 h-px bg-gradient-to-r from-[#d4af37] to-transparent mb-6" />
        {node.description && (
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-3xl">
            {node.description}
          </p>
        )}
      </header>

      {/* Child sections */}
      {node.children && node.children.length > 0 && (
        <section className="px-4 md:px-8 max-w-5xl mx-auto pb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-[#d4af37]/60 mb-6">In This Section</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {node.children.map((child) => (
              <Link
                key={child.id}
                href={`${path}/${child.slug}`}
                className="group p-6 border border-white/10 rounded-lg hover:border-[#d4af37]/30 hover:bg-white/[0.02] transition-all duration-300"
              >
                <h3 className="text-lg font-light text-white group-hover:text-[#d4af37] transition-colors mb-2">
                  {child.title}
                </h3>
                {child.description && (
                  <p className="text-sm text-gray-500 leading-relaxed">{child.description}</p>
                )}
                {child.children && (
                  <ul className="mt-3 pt-3 border-t border-white/5 space-y-1">
                    {child.children.map((grandchild) => (
                      <li key={grandchild.id} className="text-xs text-gray-600">
                        → {grandchild.title}
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back */}
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
    </div>
  );
}
