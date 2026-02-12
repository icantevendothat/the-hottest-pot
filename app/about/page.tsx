'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="relative h-screen w-screen bg-black overflow-hidden font-sans">
      {/* 1. MAP BACKGROUND (Blurred for focus) */}
      <div className="absolute inset-0 z-0 opacity-40 grayscale blur-[2px]">
        {/* You can optionally insert your MapComponent here if you want it moving in the back */}
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-black"></div>
      </div>

      {/* 2. THE FLOATING ABOUT CARD */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-black border-[4px] border-red-600 p-12 shadow-[0_0_50px_rgba(220,38,38,0.4)] animate-in fade-in zoom-in duration-500">
          
          {/* Back Button */}
          <Link href="/" className="inline-block mb-8 text-[10px] font-black uppercase tracking-widest border-b border-white hover:text-red-600 hover:border-red-600 transition-colors">
            ← Back to Map
          </Link>

          <h1 className="text-6xl font-black leading-[0.8] uppercase tracking-tighter mb-8">
            ABOUT <br /> THE <span className="text-red-600">PROJECT</span>
          </h1>

          <div className="space-y-6">
            <p className="text-lg font-bold leading-relaxed uppercase tracking-tight text-white italic border-l-4 border-red-600 pl-4">
              "A definitively biased, highly opinionated catalogue of every hot pot restaurant in the greater NYC area."
            </p>

            <div className="text-sm font-medium leading-relaxed text-gray-300 uppercase tracking-widest space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex justify-between items-end">
              <div>
                <p className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em]">Established</p>
                <p className="text-xl font-black uppercase">Feb 2026</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em]">Status</p>
                <p className="text-xl font-black uppercase">Eating...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}