
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-[#F2F0EB]">
      <div className="w-full md:w-1/2 relative bg-[#E5E2DA] min-h-[400px]">
        <div className="absolute inset-0 p-12 flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full bg-[#D1CFCA] rounded-full border-[20px] border-[#F2F0EB] relative"
          >
            <motion.div 
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', delay: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-4 h-4 bg-[#C5A059] rounded-full ring-8 ring-[#C5A059]/30" />
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-12 left-12 text-[#2A2A2A]/40 uppercase tracking-widest text-[10px]">
          552 West 24th St, New York
        </div>
      </div>

      <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl md:text-6xl mb-12">Start Mastery.</h2>
          
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="p-12 border border-[#C5A059] text-center"
            >
              <p className="font-serif text-2xl mb-4">Inquiry Received.</p>
              <p className="text-sm opacity-60">A Lab Concierge will reach out within 2 hours.</p>
            </motion.div>
          ) : (
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="relative group">
                <input 
                  required
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-transparent border-b border-[#2A2A2A]/20 py-4 focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-[#2A2A2A]/30"
                />
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 h-[1px] bg-[#C5A059] origin-left"
                />
              </div>
              
              <div className="relative group">
                <input 
                  required
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-[#2A2A2A]/20 py-4 focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-[#2A2A2A]/30"
                />
              </div>

              <div className="relative group">
                <select className="w-full bg-transparent border-b border-[#2A2A2A]/20 py-4 focus:outline-none focus:border-[#C5A059] transition-colors appearance-none">
                  <option value="">Protocol Choice</option>
                  <option value="tour">Book Private Lab Tour</option>
                  <option value="membership">Performance Membership</option>
                  <option value="corporate">Elite Group Wellness</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full py-6 mt-12 bg-[#2A2A2A] text-[#F2F0EB] uppercase tracking-widest text-xs hover:bg-[#C5A059] hover:text-[#1B261D] transition-all duration-500"
              >
                Claim Your Evolution
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
