import Link from 'next/link';
import Image from 'next/image';
import { museumSitemap, interactiveMapNode } from '@/lib/museum/sitemap';
import type { SitemapNode } from '@/lib/museum/types';

function SectionCard({ node, basePath }: { node: SitemapNode; basePath: string }) {
  const path = `${basePath}/${node.slug}`;
  return (
    <article className="group block p-6 border border-white/10 rounded-lg hover:border-[#d4af37]/30 hover:bg-white/[0.02] transition-all duration-300">
      <Link href={path} className="block">
        <h3 className="text-xl font-light text-white group-hover:text-[#d4af37] transition-colors mb-2">
          {node.title}
        </h3>
      </Link>
      {node.description && (
        <p className="text-sm text-gray-500 leading-relaxed mb-3">{node.description}</p>
      )}
      {node.children && (
        <ul className="space-y-1 mt-3 pt-3 border-t border-white/5">
          {node.children.map((child) => (
            <li key={child.id}>
              <Link
                href={`${path}/${child.slug}`}
                className="text-xs text-gray-500 hover:text-[#d4af37] transition-colors"
              >
                → {child.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function MuseumHomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/museum_background-2.gif"
            alt="Lake Poopó landscape"
            fill
            className="object-cover opacity-20"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6 opacity-60">
            <div className="h-px w-12 bg-white/40" />
            <p className="text-sm uppercase tracking-[0.4em] text-white">Virtual Museum</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">
            <span className="text-gold-gradient glow-gold-text">Qotzuñi</span>
          </h1>

          <div className="w-24 h-px bg-gradient-to-r from-[#d4af37] to-transparent mb-8" />

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-3xl mb-4">
            This virtual museum accompanies the documentary short{' '}
            <span className="text-[#d4af37]">Qotzuñi: People of the Lake</span>. Representing the findings
            of the filmmakers&apos; original research, the museum invites viewers to learn more about the Uru
            communities of Bolivia, and their historical relationship with Lake Poopó.
          </p>

          <p className="text-sm text-gray-500">
            Sources and more information about the research can be found here:{' '}
            <Link href="https://qotzunifilm.com/fluid-identities" className="text-gray-400 hover:text-[#d4af37] transition-colors underline underline-offset-4 decoration-gray-600">
              Fluid Identities: The Hydrosocial History of the Uru Communities of Lake Poopó
            </Link>
          </p>

          <p className="mt-4 text-sm text-gray-600">
            All media, unless otherwise noted, was produced by the filmmakers. Photos were taken by Gastón Zilberman.
          </p>
        </div>
      </header>

      {/* Section Index */}
      <section className="px-4 md:px-8 max-w-5xl mx-auto py-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[#d4af37]/60 mb-8">Explore the Museum</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {museumSitemap.map((section) => (
            <SectionCard key={section.id} node={section} basePath="/museum" />
          ))}
        </div>

        {/* Interactive Map card */}
        <div className="mt-6">
          <Link
            href={`/museum/${interactiveMapNode.slug}`}
            className="group block p-8 border border-[#d4af37]/20 rounded-lg hover:border-[#d4af37]/40 hover:bg-[#d4af37]/[0.03] transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              <svg className="w-6 h-6 text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <h3 className="text-2xl font-light text-white group-hover:text-[#d4af37] transition-colors">
                {interactiveMapNode.title}
              </h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed ml-10">
              {interactiveMapNode.description}
            </p>
          </Link>
        </div>
      </section>

      {/* About this museum */}
      <section className="px-4 md:px-8 max-w-5xl mx-auto py-12 border-t border-white/5">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[#d4af37]/60 mb-6">About This Museum</h2>
        <p className="text-base text-gray-400 leading-relaxed font-light max-w-3xl">
          The Qotzuñi Virtual Museum is a digital platform designed to document, contextualize, and expand the
          story of the Uru Nation of Lake Poopó beyond the documentary film. It serves as an educational platform,
          research entry point, cultural archive, and ethical accountability space.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 max-w-5xl mx-auto py-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-gray-600">&copy; 2026 Qotzuñi Virtual Museum. All rights reserved.</p>
          <p className="text-xs text-gray-600">contact@qotzuni.org</p>
        </div>
      </footer>
    </div>
  );
}
