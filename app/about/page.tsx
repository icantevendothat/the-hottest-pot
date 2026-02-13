'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "thehottestpotnyc@gmail.com"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="relative min-h-screen w-screen bg-black overflow-y-auto md:overflow-hidden font-sans">
      <div className="fixed inset-0 z-0 opacity-40 grayscale blur-[2px]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-black"></div>
      </div>

      <div className="relative md:absolute inset-0 z-10 flex items-center justify-center p-4 md:p-10 py-17 md:py-0">
        <div className="w-full max-w-2xl bg-black border-[4px] border-red-600 p-6 md:p-12 shadow-[0_0_50px_rgba(220,38,38,0.4)] animate-in fade-in zoom-in duration-500">
          
          <Link href="/" className="inline-block mb-6 md:mb-8 text-[10px] font-black uppercase tracking-widest border-b border-white hover:text-red-600 hover:border-red-600 transition-colors">
            ← Back to Map
          </Link>

          <h1 className="text-4xl md:text-6xl font-black leading-[0.8] uppercase tracking-tighter mb-6 md:mb-8">
            ABOUT <br /> THE <span className="text-red-600">HOTTEST</span> POT
          </h1>

          <div className="space-y-4 md:space-y-6">
        
            <p className="text-base md:text-lg font-bold leading-relaxed uppercase tracking-tight text-white italic border-l-4 border-red-600 pl-4">
              "A definitively biased, highly opinionated catalogue of (almost) every hot pot restaurant in the greater NYC area."
            </p>

            <div className="text-[11px] md:text-sm font-medium leading-relaxed text-gray-300 uppercase tracking-widest space-y-3 md:space-y-4">
              <p>
                3 years ago, a long time hot pot lover took her new boyfriend to try her favorite hot pot spot. The rest is history. Happy Valentines Day 2026! 
              </p>
              <p>
                This website was born of a shared need to try every hot pot restaurant in New York City (and one in Berlin) together. All
                reviews are purely opinion based on a singular visit to each spot. Please don't harrass anyone or any business. 
              </p>
            </div>

            <div className="pt-6 md:pt-8 border-t border-white/10 flex justify-between items-end">
              <div 
                onClick={handleCopy}
                className="cursor-pointer group select-none transition-all active:scale-95"
              >
                <p className={`text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-300 ${copied ? 'text-white' : 'text-red-600'}`}>
                  {copied ? "Address Copied to Clipboard" : "Did we miss one?"}
                </p>
                <p className="text-lg md:text-xl font-black uppercase group-hover:text-red-600 transition-colors">
                  {copied ? "COPIED" : "Submit a spot"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}