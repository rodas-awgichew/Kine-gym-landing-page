
import React from 'react';
import { motion } from 'framer-motion';
import { TRAINERS } from '../constants';

export const Trainers: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-24 bg-[#F2F0EB]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-serif text-5xl md:text-6xl mb-4"
          >
            The Curators
          </motion.h2>
          <div className="h-[2px] w-24 bg-[#C5A059] mx-auto opacity-40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TRAINERS.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group cursor-none"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#C5A059]/0 group-hover:bg-[#C5A059]/20 transition-all duration-700" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-[#C5A059] uppercase tracking-widest text-[10px] mb-2">{trainer.specialty}</span>
                  <h3 className="font-serif text-2xl text-white">{trainer.name}</h3>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-serif text-xl mb-1">{trainer.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[#2A2A2A]/50">{trainer.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
