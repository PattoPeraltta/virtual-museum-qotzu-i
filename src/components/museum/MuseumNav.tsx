'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { museumSitemap, interactiveMapNode } from '@/lib/museum/sitemap';
import type { SitemapNode } from '@/lib/museum/types';

function NavSection({ node, basePath, currentPath, onNavigate }: {
  node: SitemapNode;
  basePath: string;
  currentPath: string;
  onNavigate?: () => void;
}) {
  const path = `${basePath}/${node.slug}`;
  const isActive = currentPath === path || currentPath.startsWith(path + '/');
  const [isExpanded, setIsExpanded] = useState(isActive);

  return (
    <li>
      <div className="flex items-center gap-1">
        <Link
          href={path}
          onClick={onNavigate}
          className={`flex-1 py-1.5 text-sm transition-colors ${
            isActive ? 'text-[#d4af37]' : 'text-gray-400 hover:text-white'
          }`}
        >
          {node.shortTitle ?? node.title}
        </Link>
        {node.children && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 text-gray-600 hover:text-gray-400 transition-colors"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <svg className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
      {node.children && isExpanded && (
        <ul className="ml-4 border-l border-white/5 pl-3 space-y-0.5">
          {node.children.map((child) => (
            <NavSection key={child.id} node={child} basePath={path} currentPath={currentPath} onNavigate={onNavigate} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function MuseumNav() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navContent = (
    <nav aria-label="Museum sections">
      <ul className="space-y-1">
        <li>
          <Link
            href="/museum"
            onClick={() => setIsMobileOpen(false)}
            className={`block py-1.5 text-sm font-medium transition-colors ${
              pathname === '/museum' ? 'text-[#d4af37]' : 'text-gray-300 hover:text-white'
            }`}
          >
            Museum Home
          </Link>
        </li>
        <li className="pt-2">
          <div className="h-px bg-white/5 mb-2" />
        </li>
        {museumSitemap.map((section) => (
          <NavSection
            key={section.id}
            node={section}
            basePath="/museum"
            currentPath={pathname}
            onNavigate={() => setIsMobileOpen(false)}
          />
        ))}
        <li className="pt-2">
          <div className="h-px bg-white/5 mb-2" />
        </li>
        <li>
          <Link
            href={`/museum/${interactiveMapNode.slug}`}
            onClick={() => setIsMobileOpen(false)}
            className={`block py-1.5 text-sm transition-colors ${
              pathname.startsWith('/museum/interactive-map') ? 'text-[#d4af37]' : 'text-gray-400 hover:text-white'
            }`}
          >
            {interactiveMapNode.title}
          </Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-64 bg-black/90 backdrop-blur-md border-r border-white/5 z-40 overflow-y-auto">
        <div className="p-6">
          <Link href="/museum" className="block mb-8">
            <span className="text-xl font-light tracking-wider text-gold-gradient">Qotzuñi</span>
            <span className="block text-xs text-gray-500 tracking-[0.2em] uppercase mt-1">Virtual Museum</span>
          </Link>
          {navContent}
          <div className="mt-8 pt-4 border-t border-white/5">
            <Link href="https://qotzunifilm.com" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              ← Back to main site
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-black/90 backdrop-blur-md border-b border-white/5 z-40 flex items-center justify-between px-4">
        <Link href="/museum" className="text-lg font-light tracking-wider text-gold-gradient">
          Qotzuñi
        </Link>
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-30">
          <div className="absolute inset-0 bg-black/80" onClick={() => setIsMobileOpen(false)} />
          <div className="absolute top-14 left-0 right-0 bottom-0 bg-black/95 overflow-y-auto p-6">
            {navContent}
            <div className="mt-8 pt-4 border-t border-white/5">
              <Link href="https://qotzunifilm.com" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                ← Back to main site
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
