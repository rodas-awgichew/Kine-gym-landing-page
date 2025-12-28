
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-24 bg-[#F2F0EB]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] mb-12">The Kiné Collective</h2>
        <div className="relative">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <p className="font-serif text-3xl md:text-4xl italic leading-relaxed text-[#2A2A2A]">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-center gap-4 pt-8">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full grayscale" />
                <span className="text-sm font-medium tracking-wider">{t.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
