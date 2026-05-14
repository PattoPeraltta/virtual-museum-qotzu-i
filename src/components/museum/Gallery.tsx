'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
}

interface GalleryProps {
  heading?: string;
  subheading?: string;
  description?: string;
  items?: GalleryItem[];
}

const defaultGalleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Waters of Memory',
    description: 'The lake as it once was - vast, alive, and essential',
    category: 'Historical',
  },
  {
    id: 2,
    title: 'Uru-Murato Fishers',
    description: 'Generations of tradition on the water',
    category: 'Culture',
  },
  {
    id: 3,
    title: 'Flamingo Colonies',
    description: 'Thousands of Andean flamingos once called this home',
    category: 'Wildlife',
  },
  {
    id: 4,
    title: 'Mining Impact',
    description: 'Industrial operations that changed everything',
    category: 'Environment',
  },
  {
    id: 5,
    title: 'Cracked Earth',
    description: 'The lake bed exposed - a haunting landscape',
    category: 'Present',
  },
  {
    id: 6,
    title: 'Abandoned Boats',
    description: 'Silent witnesses to a way of life interrupted',
    category: 'Present',
  },
];

export default function Gallery({
  heading = 'Echoes in Image',
  subheading = 'Visual Archive',
  description = 'A collection of memories, moments, and the stark reality of Lake Poopó',
  items,
}: GalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const galleryItems = items && items.length > 0 ? items : defaultGalleryItems;
  
  // Only apply horizontal scroll animation if there are many items
  const shouldScroll = galleryItems.length > 4;
  const x = useTransform(scrollYProgress, [0, 1], shouldScroll ? ['0%', '-20%'] : ['0%', '0%']);

  return (
    <section className="relative py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-4"
      >
        <p className="text-gold/60 tracking-[0.3em] uppercase text-sm mb-4">{subheading}</p>
        <h2 className="text-4xl md:text-6xl font-light text-gold-gradient mb-6">{heading}</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{description}</p>
      </motion.div>

      <div ref={containerRef} className="relative">
        <motion.div 
          style={{ x }} 
          className={`flex gap-6 px-8 md:px-16 ${!shouldScroll ? 'justify-center flex-wrap' : ''}`}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative flex-shrink-0 w-[300px] md:w-[400px] group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
                {item.imageUrl && (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    aria-hidden
                  />
                )}
                <div className="absolute inset-0 bg-black/40" />

                <motion.div
                  animate={{
                    backgroundPosition:
                      hoveredId === item.id ? ['0% 0%', '100% 100%'] : '0% 0%',
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)',
                    backgroundSize: '30px 30px',
                  }}
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/60 flex items-end p-6"
                >
                  <div>
                    <span className="text-gold/60 text-xs tracking-wider uppercase block mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-2xl text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </motion.div>

                <div className="absolute inset-3 border border-gold/20 pointer-events-none group-hover:border-gold/40 transition-colors duration-300" />

                <motion.div
                  animate={{
                    opacity: hoveredId === item.id ? 1 : 0.5,
                    scale: hoveredId === item.id ? 1.1 : 1,
                  }}
                  className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gold"
                />
                <motion.div
                  animate={{
                    opacity: hoveredId === item.id ? 1 : 0.5,
                    scale: hoveredId === item.id ? 1.1 : 1,
                  }}
                  className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gold"
                />
                <motion.div
                  animate={{
                    opacity: hoveredId === item.id ? 1 : 0.5,
                    scale: hoveredId === item.id ? 1.1 : 1,
                  }}
                  className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gold"
                />
                <motion.div
                  animate={{
                    opacity: hoveredId === item.id ? 1 : 0.5,
                    scale: hoveredId === item.id ? 1.1 : 1,
                  }}
                  className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-gold"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-lg text-white group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <span className="text-gold/40 text-sm">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {shouldScroll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-2"
          >
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gold/40"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
          <span className="text-gold/30 text-xs tracking-wider uppercase writing-vertical">Scroll</span>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <button className="btn-mystical px-8 py-4 border border-gold/30 text-gold hover:bg-gold/10 transition-all duration-300 tracking-widest text-sm uppercase">
          Explore Full Archive
        </button>
      </motion.div>
    </section>
  );
}
