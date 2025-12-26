
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Classes } from './components/Classes';
import { Amenities } from './components/Amenities';
import { Trainers } from './components/Trainers';
import { Membership } from './components/Membership';
import { Journal } from './components/Journal';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Activity, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsub = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 100);
    });
    return () => unsub();
  }, [scrollY]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="relative bg-[#F8F7F4] min-h-screen selection:bg-[#D4AF37] selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#D4AF37] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Floating Pill Header */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-[90] transition-all duration-700 ease-in-out w-full max-w-7xl px-4 md:px-12 ${isScrolled ? 'top-6' : 'top-10'}`}>
        <div className={`flex items-center justify-between px-8 py-4 transition-all duration-500 rounded-full border ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-black/5 shadow-2xl' : 'bg-transparent border-white/10'}`}>
          <div 
            className={`font-serif text-3xl tracking-tighter cursor-pointer font-bold ${isScrolled ? 'text-[#0F1611]' : 'text-white'}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            KINÉ<span className="text-[#D4AF37]">.</span>
          </div>
          
          <div className={`hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.4em] font-bold ${isScrolled ? 'text-[#0F1611]' : 'text-white'}`}>
            <button onClick={() => scrollToSection('disciplines')} className="hover:text-[#D4AF37] transition-colors">Lab Floors</button>
            <button onClick={() => scrollToSection('trainers')} className="hover:text-[#D4AF37] transition-colors">The Roster</button>
            <button onClick={() => scrollToSection('plans')} className="hover:text-[#D4AF37] transition-colors">Access</button>
            <button onClick={() => scrollToSection('journal')} className="hover:text-[#D4AF37] transition-colors">Journal</button>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className={`hidden md:block px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border ${isScrolled ? 'bg-[#0F1611] text-white border-[#0F1611]' : 'bg-white text-[#0F1611] border-white'} hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white`}
            >
              Book Consult
            </button>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${isScrolled ? 'text-[#0F1611] hover:bg-black/5' : 'text-white hover:bg-white/10'}`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[80] bg-[#0F1611] flex flex-col items-center justify-center p-12 text-center"
          >
            <div className="space-y-10">
              {['Disciplines', 'Trainers', 'Plans', 'Journal', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block font-serif text-5xl text-white hover:text-[#D4AF37] transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative">
        <Hero />
        
        {/* Structure with Curved Transitions */}
        <div className="relative -mt-32 z-20">
          <div className="curved-section bg-[#F8F7F4] shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
            <Philosophy />
          </div>
        </div>

        <div id="disciplines" className="mt-20">
          <Classes />
        </div>

        <div className="bg-[#0F1611] curved-section py-20 my-20 mx-4 md:mx-12 overflow-hidden shadow-2xl">
          <Amenities />
        </div>

        <section id="trainers">
          <Trainers />
        </section>

        <Testimonials />

        <div id="plans" className="relative">
          <div className="bg-[#0F1611] curved-section mx-4 md:mx-12 my-24 shadow-2xl overflow-hidden">
            <Membership />
          </div>
        </div>

        <Journal />
        
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
