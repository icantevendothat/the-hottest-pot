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
    <div className="flex flex-col h-full bg-black border-[4px] border-red-600 p-8 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] font-sans">
      
      {/* BRANDING - Steam moved to the far right edge */}
      <div className="flex justify-between items-end mb-12 group">
        <h1 className="text-4xl font-black leading-[0.8] uppercase tracking-tighter">
          THE <br /> HOTTEST <br /> POT
        </h1>
        <img 
          src="/redsteam.png" 
          alt="Logo" 
          className="w-20 h-20 object-contain transition-transform group-hover:translate-y-[-4px]" 
        />
      </div>

      {/* VIEW TOGGLE */}
      <div className="flex w-full border-[3px] border-red-600 mb-16 bg-black overflow-hidden">
        <button 
          onClick={() => setViewMode('map')} 
          className={`flex-1 py-3 font-black uppercase text-[10px] tracking-widest ${viewMode === 'map' ? 'bg-red-600 text-white' : 'text-white'}`}
        >
          Map
        </button>
        <button 
          onClick={() => setViewMode('list')} 
          className={`flex-1 py-3 font-black uppercase text-[10px] tracking-widest ${viewMode === 'list' ? 'bg-red-600 text-white' : 'text-white'}`}
        >
          List
        </button>
      </div>

      {/* WELCOME TEXT - Increased font size to text-sm */}
      {!selectedPlace && (
        <div className="mb-12 animate-in fade-in duration-700">
          <p className="text-sm leading-tight uppercase font-black tracking-tight text-white">
            Welcome to the Hottest Pot. This is a definitively biased, 
            highly opinionated catalogue of every hot pot restaurant in 
            the greater NYC area.
          </p>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {selectedPlace ? (
          <div className="space-y-6 animate-in slide-in-from-bottom-2 duration-300">
            {/* Header */}
            <div>
              <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-1">{selectedPlace.rank}</p>
              <h2 className="text-2xl font-black uppercase leading-tight border-b-4 border-red-600 pb-2">
                {selectedPlace.name}
              </h2>
            </div>
            
            {/* Image - Fixed property name from .image to .imageUrl */}
            {selectedPlace.imageUrl && (
              <div className="border-[2px] border-white">
                <img 
                  src={selectedPlace.imageUrl} 
                  className="w-full h-40 object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                  alt={selectedPlace.name} 
                />
              </div>
            )}

            {/* Stats Block - Use parseFloat to ensure SteamRating gets a number */}
            <div className="flex justify-between border-b border-white/20 pb-1 text-white">
              <span>Overall Taste</span> 
              <SteamRating 
                score={typeof selectedPlace.ratings.overall === 'string' ? 0 : selectedPlace.ratings.overall} 
                size={13} 
              />
            </div>
            <div className="pt-2 space-y-2 text-red-500/80">
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span>Soup Base</span> 
                <SteamRating 
                  score={typeof selectedPlace.ratings.soup === 'number' ? selectedPlace.ratings.soup : 0} 
                  size={11} 
                />
              </div>
              
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span>Sauce Bar</span> 
                <SteamRating 
                  score={typeof selectedPlace.ratings.sauce === 'number' ? selectedPlace.ratings.sauce : 0} 
                  size={11} 
                />
              </div>
              
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span>Ingredients</span> 
                <SteamRating 
                  score={typeof selectedPlace.ratings.ingredients === 'number' ? selectedPlace.ratings.ingredients : 0} 
                  size={11} 
                />
              </div>
              
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span>Vibe</span> 
                <SteamRating 
                  score={typeof selectedPlace.ratings.atmosphere === 'number' ? selectedPlace.ratings.atmosphere : 0} 
                  size={11} 
                />
              </div>
              
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span>Value</span> 
                <SteamRating 
                  score={typeof selectedPlace.ratings.value === 'number' ? selectedPlace.ratings.value : 0} 
                  size={11} 
                />
              </div>
            </div>

            {/* Review Text */}
            <p className="text-xs text-gray-300 leading-relaxed uppercase font-bold italic border-l-2 border-red-600 pl-3">
              "{selectedPlace.reviewText}"
            </p>

            <button className="w-full py-2 border-2 border-white font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all">
              Full Review
            </button>
          </div>
        ) : null}
      </div>

      {/* FOOTER */}
      <div className="mt-auto pt-6 space-y-4">
        {!selectedPlace && (
           <p className="uppercase font-black text-[9px] tracking-[0.3em] leading-relaxed italic opacity-40 text-center">
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