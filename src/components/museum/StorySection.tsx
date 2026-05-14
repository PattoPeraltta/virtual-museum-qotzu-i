'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { RevealOnScroll } from './ScrollSection';

interface StorySectionProps {
  title: string;
  subtitle?: string;
  contentHtml: string;
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
  deeperContent?: {
    title: string;
    contentHtml: string;
  }[];
  index: number;
}

export default function   StorySection({
  title,
  subtitle,
  contentHtml,
  imageUrl = '/placeholder-lake.jpg',
  imagePosition = 'right',
  deeperContent,
  index,
}: StorySectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute top-16 left-4 md:left-0"
      >
        {/* <span className="text-8xl md:text-9xl font-light text-gold/10">
          {String(index + 1).padStart(2, '0')}
        </span> */}
      </motion.div>

      <div
        className={`flex flex-col ${
          imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
        } gap-12 md:gap-24 items-center`}
      >
        <div className="flex-1 relative z-10">
          {subtitle && (
            <RevealOnScroll>
              <p className="text-gold/60 tracking-[0.3em] uppercase text-sm mb-4">{subtitle}</p>
            </RevealOnScroll>
          )}

          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-light text-gold-gradient mb-8 leading-tight">
              {title}
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </RevealOnScroll>

          {deeperContent && deeperContent.length > 0 && (
            <RevealOnScroll delay={0.3}>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group flex items-center gap-3 text-gold/70 hover:text-gold transition-colors duration-300"
              >
                <span className="relative">
                  <span className="absolute inset-0 w-8 h-8 border border-gold/30 rounded-full group-hover:scale-125 transition-transform duration-500" />
                  <motion.span
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    className="relative flex items-center justify-center w-8 h-8"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.span>
                </span>
                <span className="tracking-wider text-sm uppercase">
                  {isExpanded ? 'Show less' : 'Dig deeper'}
                </span>
              </button>
            </RevealOnScroll>
          )}

          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-8 space-y-6">
              {deeperContent?.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -20 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="knowledge-node pl-8 border-l border-gold/20"
                >
                  <h3 className="text-xl text-gold mb-2">{item.title}</h3>
                  <p
                    className="text-gray-400 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.contentHtml }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div style={{ scale: imageScale, opacity: imageOpacity }} className="flex-1 w-full">
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal"
              style={{
                backgroundImage: imageUrl !== '/placeholder-lake.jpg' ? `url(${imageUrl})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="currentColor" className="text-gold" />
                    </pattern>
                  </defs>
                  <rect fill={`url(#pattern-${index})`} width="100" height="100" />
                </svg>
              </div>

              <motion.div
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(45deg, transparent 40%, rgba(212, 175, 55, 0.1) 50%, transparent 60%)',
                  backgroundSize: '200% 200%',
                }}
              />
            </div>

            <div className="absolute inset-4 border border-gold/30 pointer-events-none" />
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-gold" />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-gold" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-gold" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-gold" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />
    </section>
  );
}
