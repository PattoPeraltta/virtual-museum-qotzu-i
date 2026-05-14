'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="museum-grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-light text-gold-gradient mb-4"
            >
              Qotzuñi
            </motion.h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              A virtual museum dedicated to preserving the memory of Lake Poopó and raising awareness about
              environmental conservation.
            </p>
          </div>

          <div>
            <h4 className="text-gold/60 text-sm tracking-wider uppercase mb-4">Explore</h4>
            <ul className="space-y-2">
              {['The Story', 'Timeline', 'Gallery', 'Impact', 'Take Action'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold/60 text-sm tracking-wider uppercase mb-4">Connect</h4>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/40 transition-all duration-300"
                >
                  <span className="text-xs uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
            <p className="mt-6 text-gray-500 text-sm">contact@qotzuni.org</p>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">(c) 2024 Qotzuñi Virtual Museum. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Made with purpose for our planet</p>
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />
    </footer>
  );
}
