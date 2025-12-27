
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AMENITIES } from '../constants';

export const Amenities: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {AMENITIES.map((amenity, index) => {
          const start = index / AMENITIES.length;
          const end = (index + 1) / AMENITIES.length;
          
          // Custom hook logic inlined for the specific animation range
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(scrollYProgress, 
            [start, start + 0.1, end - 0.1, end], 
            [0, 1, 1, 0]
          );
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const scale = useTransform(scrollYProgress, [start, end], [1.1, 1]);

          return (
            <motion.div
              key={amenity.id}
              style={{ opacity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.img 
                src={amenity.image} 
                style={{ scale }}
                className="absolute inset-0 w-full h-full object-cover"
                alt={amenity.title}
              />
              <div className="absolute inset-0 bg-black/40" />
              
              <div className="relative z-10 text-center px-6">
                <motion.h3 
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="font-serif text-4xl md:text-7xl text-[#F2F0EB] mb-6"
                >
                  {amenity.title}
                </motion.h3>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-[#F2F0EB]/80 max-w-xl mx-auto font-light"
                >
                  {amenity.description}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
