
import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const yParallax = useTransform(scrollY, [0, 500], [0, 100]);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
    hidden: { opacity: 0, y: 50 },
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[120vh] w-full bg-[#0F1611] overflow-hidden">
      {/* Curved Visual Container */}
      <motion.div 
        style={{ opacity, scale, y: yParallax }}
        className="absolute inset-0 z-0 curved-section overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0F1611] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D" 
          className="w-full h-full object-cover"
          alt="Performance Laboratory"
        />
      </motion.div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.p variants={child} className="text-[#D4AF37] uppercase tracking-[0.5em] text-xs mb-6 font-bold">
            The New Standard in Elite Performance
          </motion.p>
          <motion.h1 
            variants={child}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-[0.9]"
          >
            Refine Your <br />
            <span className="italic text-[#D4AF37]">Potential.</span>
          </motion.h1>
          <motion.p variants={child} className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            More than a gym. A laboratory for human achievement. Engineered for those who demand the absolute best from their body and mind.
          </motion.p>

          <motion.div variants={child} className="flex flex-col sm:flex-row gap-6 justify-center">
            <MagneticButton onClick={() => scrollToSection('plans')}>
              <span className="flex items-center gap-3">
                Join The Roster <ArrowRight size={16} />
              </span>
            </MagneticButton>
            <button 
              onClick={() => scrollToSection('disciplines')}
              className="px-8 py-4 border border-white/20 text-white rounded-full text-sm tracking-widest uppercase hover:bg-white hover:text-[#0F1611] transition-all duration-500"
            >
              Explore Disciplines
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#F8F7F4] to-transparent z-10" />
    </section>
  );
};
