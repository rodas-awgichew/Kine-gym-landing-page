
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLASSES } from '../constants';
import { X, Play } from 'lucide-react';

export const Classes: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [showSchedule, setShowSchedule] = useState<string | null>(null);

  return (
    <section id="disciplines" className="py-24 px-6 md:px-24">
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block text-center">Master The Lab Floor</span>
          <h2 className="font-serif text-5xl md:text-7xl text-[#0F1611] text-center leading-[1.1]">The Core <span className="italic">Disciplines.</span></h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[700px]">
        {CLASSES.map((cls, idx) => (
          <motion.div
            key={cls.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onMouseEnter={() => setHoveredId(cls.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="relative rounded-[3rem] overflow-hidden group cursor-pointer h-[500px] md:h-full transition-all duration-700"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-700 z-10" />
            <img 
              src={cls.image} 
              alt={cls.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            <div className="absolute inset-x-8 bottom-8 z-20 transition-all duration-500">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-center mb-4">
                   <h3 className="font-serif text-3xl text-white italic">{cls.title}</h3>
                   <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-white">
                      <Play size={16} fill="white" />
                   </div>
                </div>
                <p className="text-white/70 text-sm font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {cls.description}
                </p>
                <button 
                  onClick={() => alert("Booking Class...")}
                  className="w-full py-4 bg-white text-[#0F1611] rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all opacity-0 group-hover:opacity-100 duration-700 delay-150"
                >
                  Secure Spot
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
