
import React from 'react';
import { motion } from 'framer-motion';

const ARTICLES = [
  { title: "Cellular Recovery: The Ice Protocol", date: "NOV 12", tag: "BIOHACKING" },
  { title: "Metabolic Architecture & Strength", date: "NOV 08", tag: "PHYSIOLOGY" },
  { title: "The Neural Impact of Flow State", date: "NOV 01", tag: "MINDSET" }
];

export const Journal: React.FC = () => {
  return (
    <section id="journal" className="py-32 px-6 md:px-24 bg-[#F2F0EB] border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl mb-4">Insights.</h2>
            <p className="text-[10px] uppercase tracking-widest opacity-50">Vault Performance Journal</p>
          </div>
          <button className="text-[10px] uppercase tracking-widest border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors">Read All Articles</button>
        </div>

        <div className="space-y-0">
          {ARTICLES.map((article, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ x: 20 }}
              className="flex items-center justify-between py-12 border-b border-black/10 group cursor-pointer transition-all"
            >
              <div className="flex gap-12 items-baseline">
                <span className="text-[10px] opacity-30">{article.date}</span>
                <h3 className="font-serif text-2xl md:text-3xl group-hover:text-[#C5A059] transition-colors">{article.title}</h3>
              </div>
              <span className="text-[10px] tracking-widest opacity-40 hidden md:block">{article.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
