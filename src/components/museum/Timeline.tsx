'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  deeperInfo?: string;
}

interface TimelineProps {
  heading?: string;
  subheading?: string;
  events?: TimelineEvent[];
}

const defaultTimelineEvents: TimelineEvent[] = [
  {
    year: '1970s',
    title: 'Lake in its Glory',
    description:
      'Lake Poopó spans over 1,000 square kilometers, supporting thousands of species and indigenous communities.',
    deeperInfo:
      "The Uru-Murato people had lived along its shores for millennia, their entire culture built around fishing and the lake's ecosystem.",
  },
  {
    year: '1990s',
    title: 'Warning Signs Emerge',
    description: 'Mining operations intensify in the watershed. Water levels begin their slow, persistent decline.',
    deeperInfo:
      'Tin, silver, and other metal mining diverted water sources and introduced heavy metals into the ecosystem.',
  },
  {
    year: '2015',
    title: 'First Major Drying',
    description: 'The lake completely dries for the first time in recorded history, devastating local communities.',
    deeperInfo: 'Over 200 Uru-Murato families were forced to abandon their ancestral lands. Thousands of flamingos died.',
  },
  {
    year: '2016-2023',
    title: 'Cycles of Hope and Loss',
    description: 'Brief periods of recovery followed by recurring droughts paint a picture of instability.',
    deeperInfo: 'Climate change has intensified El Niño effects, while unregulated water extraction continues upstream.',
  },
  {
    year: 'Present',
    title: 'A Call for Change',
    description: 'The fight continues for water rights, sustainable practices, and climate action.',
    deeperInfo: 'Environmental groups and indigenous communities advocate for legal protection of the lake and watershed.',
  },
];

export default function Timeline({
  heading = 'Timeline of Loss',
  subheading = 'Through the Years',
  events,
}: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const timelineEvents = events && events.length > 0 ? events : defaultTimelineEvents;

  return (
    <section ref={containerRef} className="relative py-32 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <p className="text-gold/60 tracking-[0.3em] uppercase text-sm mb-4">{subheading}</p>
        <h2 className="text-4xl md:text-6xl font-light text-gold-gradient">{heading}</h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 w-px h-full bg-charcoal-light -translate-x-1/2">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-gold via-gold to-gold/30"
          />
        </div>

        <div className="space-y-24">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={`${event.year}-${index}`} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className={`relative flex items-center ${
        isLeft ? 'justify-end md:pr-[calc(50%+3rem)]' : 'justify-start md:pl-[calc(50%+3rem)]'
      }`}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gold rounded-full"
        />
      </motion.div>

      <div
        className={`relative w-full md:w-auto md:max-w-md p-6 bg-charcoal/50 border border-gold/20 ${
          isLeft ? 'text-right' : 'text-left'
        }`}
      >
        <div className={`absolute top-6 ${isLeft ? '-right-20 md:-right-24' : '-left-20 md:-left-24'} hidden md:block`}>
          <span className="text-gold text-lg tracking-wider">{event.year}</span>
        </div>

        <span className="md:hidden text-gold text-sm tracking-wider block mb-2">{event.year}</span>

        <h3 className="text-2xl text-white mb-3">{event.title}</h3>
        <p className="text-gray-400 leading-relaxed mb-4">{event.description}</p>

        {event.deeperInfo && (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gold/70 hover:text-gold transition-colors text-sm tracking-wider uppercase flex items-center gap-2"
              style={{ flexDirection: isLeft ? 'row-reverse' : 'row' }}
            >
              <motion.svg
                animate={{ rotate: isExpanded ? 180 : 0 }}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </motion.svg>
              {isExpanded ? 'Less' : 'More'}
            </button>

            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="pt-4 text-gray-500 text-sm leading-relaxed border-t border-gold/10 mt-4">
                {event.deeperInfo}
              </p>
            </motion.div>
          </>
        )}

        <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-8 h-8 border-t border-gold/40 ${
          isLeft ? 'border-r' : 'border-l'
        }`} />
        <div
          className={`absolute bottom-0 ${isLeft ? 'left-0' : 'right-0'} w-8 h-8 border-b border-gold/40 ${
            isLeft ? 'border-l' : 'border-r'
          }`}
        />
      </div>
    </motion.div>
  );
}
