'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  targetY: number;
  duration: number;
  delay: number;
}

interface HeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  description?: string;
}

export default function Hero({
  title,
  subtitle = 'Virtual Museum',
  eyebrow = 'A Journey Through Memory',
  description,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const newParticles = Array.from({ length: 50 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        targetY: Math.random() * -500 - 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      }));
      setParticles(newParticles);
      setIsMounted(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const textY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-30%']);

  return (
    <section ref={containerRef} className="relative h-[120vh] overflow-hidden">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {isMounted &&
            particles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold/30 rounded-full"
                initial={{
                  x: particle.x,
                  y: particle.y,
                }}
                animate={{
                  y: [null, particle.targetY],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
        </div>

        <motion.div style={{ y, opacity, scale }} className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full border border-gold/20"
          />
          <motion.div
            animate={{
              scale: [1.2, 1.5, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute inset-0 rounded-full border border-gold/10"
          />
          <motion.div
            animate={{
              scale: [1.5, 2, 1.5],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute inset-0 rounded-full border border-gold/5"
          />
        </motion.div>

        <motion.div style={{ y: textY, opacity }} className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gold/60 tracking-[0.3em] uppercase text-sm md:text-base mb-6"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-4"
          >
            <span className="text-gold-gradient glow-gold-text">{title}</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="w-32 md:w-48 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-6"
          />

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-2xl md:text-4xl text-gray-300 font-light tracking-widest"
          >
            {subtitle}
          </motion.h2>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-8 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          style={{ opacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gold/40 text-xs tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-gold/40 to-transparent" />
          </motion.div>
        </motion.div>

        <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-gold/20" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-gold/20" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-gold/20" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-gold/20" />
      </div>
    </section>
  );
}
