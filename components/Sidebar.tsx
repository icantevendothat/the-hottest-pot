'use client';

import { HotPotPlace } from '@/data/spots';
import SteamRating from './SteamRating';

interface SidebarProps {
    viewMode: 'map' | 'list';
    setViewMode: (mode: 'map' | 'list') => void;
    selectedPlace: any; // You can refine this type later
  }
  
export default function Sidebar({ viewMode, setViewMode, selectedPlace }: SidebarProps) {
  return (
    <div className="flex flex-col h-full bg-black border-r border-red-900 p-6">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-4xl font-black leading-[0.9] uppercase tracking-tighter">
          The <br /> Hottest <br /> Pot <span className="text-red-600">♨️</span>
        </h1>
      </div>

      {/* Map/List Toggle */}
      <div className="flex w-full border border-red-600 h-10 mb-8">
        <button
          onClick={() => setViewMode('map')}
          className={`flex-1 text-[10px] font-bold uppercase tracking-widest transition-all ${
            viewMode === 'map' ? 'bg-red-600 text-black' : 'text-white hover:bg-red-900/20'
          }`}
        >
          Map
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`flex-1 text-[10px] font-bold uppercase tracking-widest transition-all ${
            viewMode === 'list' ? 'bg-red-600 text-black' : 'text-white hover:bg-red-900/20'
          }`}
        >
          List
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto">
        {!selectedPlace ? (
          <div className="flex flex-col items-center justify-center h-40 opacity-40">
             <span className="text-red-600 text-xl mb-2">♨️</span>
             <p className="font-mono text-[10px] uppercase tracking-widest text-center">
               Select a location <br/> on the map
             </p>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold border-b border-red-600 pb-2">{selectedPlace.name}</h2>
            {/* Additional details from Figma mockup here */}
          </div>
        )}
      </div>

      {/* Bottom Link */}
      <div className="mt-auto pt-4 border-t border-red-900/50">
        <button className="text-[10px] font-bold uppercase tracking-widest border-b border-white hover:text-red-600 hover:border-red-600 transition-colors">
          About Project
        </button>
      </div>
    </div>
  );
}