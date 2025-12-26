
import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="py-20 px-6 md:px-24 bg-[#1B261D] text-[#F2F0EB]/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-3xl text-[#F2F0EB] mb-4 tracking-tighter">KINÉ</h2>
          <p className="text-[10px] uppercase tracking-[0.3em]">The Kinetic Lab NYC</p>
        </div>

        <div className="flex gap-12 uppercase tracking-widest text-[10px]">
          <a href="#" className="hover:text-[#C5A059] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#C5A059] transition-colors">Spotify</a>
          <a href="#" className="hover:text-[#C5A059] transition-colors">Journal</a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <span className="text-[10px] uppercase tracking-[0.2em]">Kinetic Intelligence Newsletter</span>
          {subscribed ? (
            <span className="text-[#C5A059] text-[10px] uppercase tracking-widest">Added to the Roster.</span>
          ) : (
            <form onSubmit={handleSubscribe} className="flex border-b border-[#F2F0EB]/20 pb-2">
              <input 
                required
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent focus:outline-none placeholder:text-[#F2F0EB]/30 text-sm"
              />
              <button type="submit" className="ml-4 hover:text-[#C5A059] transition-colors">→</button>
            </form>
          )}
        </div>
      </div>
      <div className="mt-20 text-center text-[10px] uppercase tracking-[0.5em] opacity-30">
        © 2024 KINÉ MOVEMENT LAB. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};
