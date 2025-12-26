
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Philosophy: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section className="py-24 md:py-40 px-6 md:px-24 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-6 block">Our Methodology</span>
            <h2 className="font-serif text-5xl md:text-7xl text-[#0F1611] mb-10 leading-[1.1]">
              The Pursuit of <br /> <span className="italic">Absolute</span> Peak.
            </h2>
            <p className="text-xl text-[#0F1611]/70 leading-relaxed font-light mb-12">
              Forget the "standard" gym experience. KINÉ is an ecosystem built for transformation. We combine advanced biomechanics, neural recovery, and high-performance nutrition to rewrite your genetic ceiling. 
            </p>
            
            <div className="grid grid-cols-2 gap-12 border-t border-black/5 pt-12">
              <div>
                <h4 className="font-bold text-3xl font-serif text-[#D4AF37]">98%</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Client Retention Rate</p>
              </div>
              <div>
                <h4 className="font-bold text-3xl font-serif text-[#D4AF37]">0-100</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Transformation Metric</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          style={{ y: yParallax }}
          className="lg:w-1/2 relative"
        >
          <div className="relative rounded-[4rem] overflow-hidden shadow-2xl shadow-black/20">
            <img 
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltfGVufDB8fDB8fHww" 
              alt="Elite Training Environment"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-[#D4AF37] text-white p-12 rounded-[3rem] hidden md:block shadow-xl">
             <p className="font-serif text-2xl italic">Results aren't requested. <br />They're engineered.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
