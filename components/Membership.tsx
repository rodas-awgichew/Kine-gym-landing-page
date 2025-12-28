
import React from 'react';
import { motion } from 'framer-motion';
import { MEMBERSHIP_PLANS } from '../constants';
import { Check, Sparkles } from 'lucide-react';

export const Membership: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl md:text-7xl mb-6">Choose Your <span className="text-[#D4AF37] italic">Legacy.</span></h2>
            <p className="text-white/40 tracking-[0.4em] uppercase text-xs font-bold">Invest in your ultimate self</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERSHIP_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative p-12 rounded-[3rem] border transition-all duration-700 group overflow-hidden ${
                idx === 1 
                  ? 'bg-white/10 border-[#D4AF37]/50 scale-105 z-10 shadow-2xl shadow-[#D4AF37]/5' 
                  : 'bg-white/[0.03] border-white/10 hover:border-white/30'
              }`}
            >
              {idx === 1 && (
                <div className="absolute top-8 right-8 text-[#D4AF37]">
                  <Sparkles size={20} />
                </div>
              )}
              
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#D4AF37] mb-8">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-6xl font-serif font-bold">{plan.price}</span>
                <span className="text-white/30 uppercase text-[10px] tracking-widest">/ Per Month</span>
              </div>
              
              <ul className="space-y-6 mb-12">
                {plan.features.map(feat => (
                  <li key={feat} className="flex items-center gap-4 text-sm font-light text-white/70 group-hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => alert(`Starting application for ${plan.name} status...`)}
                className={`w-full py-5 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all duration-500 ${
                  idx === 1 
                    ? 'bg-[#D4AF37] text-[#0F1611] hover:bg-white hover:text-[#0F1611]' 
                    : 'bg-white text-[#0F1611] hover:bg-[#D4AF37] hover:text-white'
                }`}
              >
                Apply For Membership
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
