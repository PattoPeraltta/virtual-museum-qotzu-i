'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  parallaxStrength?: number;
}

export default function ScrollSection({
  children,
  className = '',
  parallaxStrength = 0.3,
}: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${parallaxStrength * 100}px`, `-${parallaxStrength * 100}px`]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={`relative ${className}`}>
      {children}
    </motion.div>
  );
}

export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'start 60%'],
  });

  const initialPosition = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  };

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [initialPosition[direction].y, 0]
  );
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [initialPosition[direction].x, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div ref={ref} style={{ y, x, opacity }} transition={{ delay }} className={className}>
      {children}
    </motion.div>
  );
}

export function TextReveal({
  text,
  className = '',
  charDelay = 0.03,
}: {
  text: string;
  className?: string;
  charDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          transition={{ delay: i * charDelay, duration: 0.35 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}

export function ParallaxImage({
  src,
  alt,
  className = '',
  strength = 0.2,
}: {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${strength * 100}%`, `${strength * 100}%`]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-full">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${src})` }}
          role="img"
          aria-label={alt}
        />
      </motion.div>
    </div>
  );
}
