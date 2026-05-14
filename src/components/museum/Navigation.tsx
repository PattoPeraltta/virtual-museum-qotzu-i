'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  logoLabel?: string;
  logoHref?: string;
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: 'Story', href: '#story' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Impact', href: '#impact' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Act', href: '#action' },
];

export default function Navigation({
  logoLabel = 'Qotzuñi',
  logoHref = '/museum',
  navItems = defaultNavItems,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 100);
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href={logoHref}
              className="text-xl font-light tracking-wider text-gold-gradient"
              whileHover={{ scale: 1.05 }}
            >
              {logoLabel}
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="relative text-sm tracking-wider uppercase text-gray-400 hover:text-gold transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.span
                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                className="w-6 h-px bg-gold"
              />
              <motion.span
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                className="w-6 h-px bg-gold"
              />
              <motion.span
                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                className="w-6 h-px bg-gold"
              />
            </button>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gold origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.nav>

      <motion.div
        initial={false}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                y: isMenuOpen ? 0 : 20,
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-3xl font-light tracking-wider text-gray-300 hover:text-gold transition-colors duration-300"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
