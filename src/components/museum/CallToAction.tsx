'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CallToAction({
  title = 'Be Part of the Change',
  description =
    "The story of Lake Poopó is not just about one lake - it's a mirror reflecting our global environmental crisis. Your awareness matters. Your voice matters. Your actions matter.",
  primaryLabel = 'Take Action',
  primaryHref,
  secondaryLabel = '',
  secondaryHref,
}: CallToActionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  const renderPrimary = () => {
    if (primaryHref) {
      return (
        <Link
          href={primaryHref}
          className="group relative px-10 py-4 bg-gold text-black font-medium tracking-widest text-sm uppercase overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
        >
          <span className="relative z-10">{primaryLabel}</span>
          <motion.div
            className="absolute inset-0 bg-gold-light"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      );
    }

    return (
      <button className="group relative px-10 py-4 bg-gold text-black font-medium tracking-widest text-sm uppercase overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gold/30">
        <span className="relative z-10">{primaryLabel}</span>
        <motion.div
          className="absolute inset-0 bg-gold-light"
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>
    );
  };

  const renderSecondary = () => {
    if (secondaryHref) {
      return (
        <Link
          href={secondaryHref}
          className="btn-mystical px-10 py-4 border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 tracking-widest text-sm uppercase"
        >
          {secondaryLabel}
        </Link>
      );
    }

    return (
      <button className="btn-mystical px-10 py-4 border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 tracking-widest text-sm uppercase">
        {secondaryLabel}
      </button>
    );
  };

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal/20 to-black" />

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-gold/10 rounded-full"
            style={{
              width: `${(i + 1) * 300}px`,
              height: `${(i + 1) * 300}px`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, scale }} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true }}
          className="w-20 h-20 mx-auto mb-8 border border-gold/40 rounded-full flex items-center justify-center"
        >
          <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-gold-gradient mb-8 leading-tight"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {renderPrimary()}
          {renderSecondary()}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {['Learn More', 'Donate', 'Volunteer', 'Contact'].map((link, i) => (
            <a
              key={link}
              href="#"
              className="text-gray-500 hover:text-gold transition-colors duration-300 text-sm tracking-wider uppercase flex items-center gap-2 group"
            >
              <span>{link}</span>
              <motion.svg
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
