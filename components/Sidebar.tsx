'use client';
import { HotPotPlace } from '@/data/spots';
import SteamRating from './SteamRating';
import Link from 'next/link';

interface SidebarProps {
  viewMode: 'map' | 'list';
  setViewMode: (mode: 'map' | 'list') => void;
  selectedPlace: HotPotPlace | null;
}

export default function Sidebar({ viewMode, setViewMode, selectedPlace }: SidebarProps) {
  return (
    <div className="flex flex-col h-fit md:h-full bg-black border-[4px] border-red-600 p-4 md:p-8 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] font-sans">
      
      <div className="flex justify-between items-end mb-4 md:mb-12 group">
        <h1 className="text-2xl md:text-4xl font-black leading-[0.8] uppercase tracking-tighter">
          THE <br /> HOTTEST <br /> POT
        </h1>
        <img 
          src="/redsteam.png" 
          alt="Logo" 
          className="w-12 h-12 md:w-20 md:h-20 object-contain transition-transform group-hover:translate-y-[-4px]" 
        />
      </div>

      <div className="flex w-full border-[3px] border-red-600 mb-6 md:mb-16 bg-black overflow-hidden">
        <button 
          onClick={() => setViewMode('map')} 
          className={`flex-1 py-2 md:py-3 font-black uppercase text-[10px] tracking-widest ${viewMode === 'map' ? 'bg-red-600 text-white' : 'text-white'}`}
        >
          Map
        </button>
        <button 
          onClick={() => setViewMode('list')} 
          className={`flex-1 py-2 md:py-3 font-black uppercase text-[10px] tracking-widest ${viewMode === 'list' ? 'bg-red-600 text-white' : 'text-white'}`}
        >
          List
        </button>
      </div>

      {!selectedPlace && (
        <div className="mb-4 md:mb-12 animate-in fade-in duration-700">
          <p className="text-[11px] md:text-sm leading-tight uppercase font-black tracking-tight text-white">
            Welcome to the Hottest Pot. <br></br><br></br>
            Spots with above a "4" rating appear on the map in Red. <br></br><br></br>Between "3" and "4" appear in orange, and below "3" in yellow.<br></br><br></br>Spots that appear in black have yet to be rated.
          </p>
        </div>
      )}

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {selectedPlace ? (
          <div className="space-y-4 md:space-y-6 animate-in slide-in-from-bottom-2 duration-300">
            <div>
              <p className="text-[8px] md:text-[10px] font-black text-red-600 uppercase tracking-widest mb-1">{selectedPlace.rank}</p>
              <h2 className="text-xl md:text-2xl font-black uppercase leading-tight border-b-4 border-red-600 pb-2">
                {selectedPlace.name}
              </h2>
            </div>
            
            {selectedPlace.imageUrl && (
              <div className="border-[2px] border-white">
                <img 
                  src={selectedPlace.imageUrl} 
                  className="w-full h-32 md:h-40 object-cover grayscale" 
                  alt={selectedPlace.name} 
                />
              </div>
            )}

            <div className="flex justify-between border-b border-white/20 pb-1 text-[11px] md:text-base">
              <span>Overall Taste</span> 
              <SteamRating 
                score={typeof selectedPlace.ratings.overall === 'string' ? 0 : selectedPlace.ratings.overall} 
                size={11} 
              />
            </div>
            
            <div className="pt-1 space-y-1 md:space-y-2 text-red-500/80 text-[9px] md:text-[10px]">
              {['soup', 'sauce', 'ingredients', 'atmosphere', 'value'].map((key) => (
                <div key={key} className="flex justify-between border-b border-white/10 pb-1 uppercase">
                  <span>{key === 'atmosphere' ? 'Vibe' : key}</span>
                  <SteamRating 
                    score={typeof (selectedPlace.ratings as any)[key] === 'number' ? (selectedPlace.ratings as any)[key] : 0} 
                    size={9} 
                  />
                </div>
              ))}
            </div>

            <p className="text-[10px] md:text-xs text-gray-300 leading-relaxed uppercase font-bold italic border-l-2 border-red-600 pl-3">
              "{selectedPlace.reviewText}"
            </p>

            <button className="w-full py-1.5 md:py-2 border-2 border-white font-black uppercase text-[9px] md:text-[10px] tracking-widest hover:bg-white hover:text-black transition-all">
              Full Review
            </button>
          </div>
        ) : null}
      </div>

      <div className={`mt-auto pt-4 space-y-4 ${selectedPlace ? 'hidden md:block' : 'block'}`}>
        {!selectedPlace && (
           <p className="uppercase font-black text-[8px] md:text-[9px] tracking-[0.3em] leading-relaxed italic opacity-40 text-center">
            Click a spot <br /> to get started!
          </p>
        )}
        
        <div className="text-left">
          <Link href="/about">
            <button className="font-black uppercase text-[10px] border-b-2 border-white pb-0.5 hover:text-red-600 hover:border-red-600 transition-colors">
              About
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}