'use client';

import Image from 'next/image';
import type { ContentBlock, MediaItem, ExternalLink } from '@/lib/museum/types';

function TextBlock({ block }: { block: ContentBlock }) {
  if (block.htmlContent) {
    return (
      <div
        className="text-base md:text-lg text-gray-300 leading-relaxed font-light museum-prose"
        dangerouslySetInnerHTML={{ __html: block.htmlContent }}
      />
    );
  }
  return <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">{block.content}</p>;
}

function HeadingBlock({ block }: { block: ContentBlock }) {
  const Tag = block.level === 3 ? 'h4' : block.level === 2 ? 'h3' : 'h2';
  const styles = {
    1: 'text-3xl md:text-4xl font-light text-gold-gradient mt-12 mb-6',
    2: 'text-2xl md:text-3xl font-light text-white/90 mt-10 mb-4',
    3: 'text-xl md:text-2xl font-light text-white/80 mt-8 mb-3',
  };
  return <Tag className={styles[block.level ?? 2]}>{block.content}</Tag>;
}

function LinksBlock({ block }: { block: ContentBlock }) {
  const items = block.items as ExternalLink[] | undefined;
  if (!items?.length) return null;
  return (
    <ul className="space-y-3 my-6">
      {items.map((link, i) => (
        <li key={i}>
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-[#f4d03f] hover:text-[#d4af37] transition-colors underline underline-offset-4 decoration-[#d4af37]/40 hover:decoration-[#d4af37]"
          >
            {link.title}
          </a>
          {link.description && (
            <span className="block text-sm text-gray-500 mt-1">{link.description}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

function QuoteBlock({ block }: { block: ContentBlock }) {
  return (
    <blockquote className="border-l-2 border-[#d4af37]/40 pl-6 my-8 italic text-gray-400 text-lg">
      {block.content}
      {block.source && <cite className="block mt-2 text-sm text-gray-500 not-italic">— {block.source}</cite>}
    </blockquote>
  );
}

export function MediaGallery({ media }: { media: MediaItem[] }) {
  if (!media.length) return null;
  const gridCols = media.length === 1 ? '' : media.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className="my-12">
      <div className={`grid grid-cols-1 ${gridCols} gap-4`}>
        {media.map((item, i) => (
          <figure key={i} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {(item.caption || item.credit) && (
              <figcaption className="mt-2 text-sm text-gray-500">
                {item.caption}
                {item.credit && <span className="block text-xs text-gray-600 mt-0.5">Photo: {item.credit}</span>}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}

export function ExternalLinks({ links }: { links: ExternalLink[] }) {
  if (!links.length) return null;
  return (
    <div className="my-8 p-6 border border-white/10 rounded-lg bg-white/[0.02]">
      <h3 className="text-sm uppercase tracking-[0.2em] text-[#d4af37]/60 mb-4">Related Links</h3>
      <ul className="space-y-3">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-[#f4d03f] hover:text-[#d4af37] transition-colors underline underline-offset-4 decoration-[#d4af37]/40 hover:decoration-[#d4af37] text-sm"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CitationsList({ citations }: { citations: Array<{ text: string; url?: string; authors?: string; year?: string }> }) {
  if (!citations.length) return null;
  return (
    <div className="my-8 p-6 border border-white/10 rounded-lg bg-white/[0.02]">
      <h3 className="text-sm uppercase tracking-[0.2em] text-[#d4af37]/60 mb-4">Sources</h3>
      <ul className="space-y-3">
        {citations.map((cite, i) => (
          <li key={i} className="text-sm text-gray-400">
            {cite.authors && <span className="text-gray-300">{cite.authors}</span>}
            {cite.year && <span> ({cite.year})</span>}
            {cite.authors && '. '}
            {cite.url ? (
              <a
                href={cite.url}
                target="_blank"
                rel="noreferrer"
                className="text-[#f4d03f]/80 hover:text-[#d4af37] transition-colors underline underline-offset-4 decoration-[#d4af37]/30"
              >
                {cite.text}
              </a>
            ) : (
              <span>{cite.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return <HeadingBlock key={i} block={block} />;
          case 'text':
            return <TextBlock key={i} block={block} />;
          case 'quote':
            return <QuoteBlock key={i} block={block} />;
          case 'links':
            return <LinksBlock key={i} block={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
