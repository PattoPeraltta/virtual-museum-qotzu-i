'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

interface ImpactStatsProps {
  heading?: string;
  subheading?: string;
  description?: string;
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  {
    value: 1000,
    suffix: '+',
    label: 'Square Kilometers',
    description: 'Of lake surface lost to drought and mismanagement',
  },
  {
    value: 200,
    suffix: '+',
    label: 'Families Displaced',
    description: 'Indigenous Uru-Murato people forced to leave ancestral lands',
  },
  {
    value: 75,
    suffix: '%',
    label: 'Biodiversity Loss',
    description: 'Species that once thrived in the lake ecosystem',
  },
  {
    value: 3000,
    suffix: '+',
    label: 'Years of History',
    description: 'Of human civilization connected to Lake Poopó',
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);

        setDisplayValue(Math.floor(eased * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-gold-gradient">
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactStats({
  heading = 'Numbers Tell a Story',
  subheading = 'The Impact',
  description =
    'Behind every statistic is a world of loss - ecosystems destroyed, cultures displaced, and futures uncertain.',
  stats,
}: ImpactStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const resolvedStats = stats && stats.length > 0 ? stats : defaultStats;

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal/50 to-black" />
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent"
              style={{
                left: `${(i + 1) * 5}%`,
                height: '100%',
              }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gold/60 tracking-[0.3em] uppercase text-sm mb-4">{subheading}</p>
          <h2 className="text-4xl md:text-6xl font-light text-gold-gradient mb-6">{heading}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resolvedStats.map((stat, index) => (
            <motion.div
              key={`${stat.label}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative group"
            >
              <div className="p-8 bg-charcoal/30 border border-gold/10 hover:border-gold/30 transition-all duration-500">
                <div className="text-5xl md:text-6xl font-light mb-4">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>

                <h3 className="text-xl text-white mb-2">{stat.label}</h3>

                <p className="text-gray-500 text-sm leading-relaxed">{stat.description}</p>

                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gold"
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />

                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/30 group-hover:border-gold/60 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
