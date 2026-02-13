'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import MapComponent from '@/components/MapComponent';
import ListView from '@/components/ListView';
import { HOT_POT_DATA, HotPotPlace } from '@/data/spots';

export default function Home() {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [selectedPlace, setSelectedPlace] = useState<HotPotPlace | null>(null);

  return (
    <main className="relative h-screen w-screen bg-black overflow-hidden font-sans">
      {/* LAYER 0: THE MAP (Always background) */}
      <div className="absolute inset-0 z-0">
        <MapComponent 
          savedSpots={HOT_POT_DATA} 
          onSelectPlace={(place: HotPotPlace) => setSelectedPlace(place)} 
        />
      </div>

      {/* LAYER 1: THE UI (Floating on top) */}
      {/* p-4 creates the floating border where the map peaks through */}
      <div className="absolute inset-4 z-10 flex gap-4 pointer-events-none">
        
        {/* SIDEBAR: Always visible, fixed width */}
        <div className="w-[380px] h-full pointer-events-auto">
          <Sidebar 
            viewMode={viewMode}
            setViewMode={setViewMode}
            selectedPlace={selectedPlace}
          />
        </div>

        {/* LIST VIEW: Only appears to the right of Sidebar when active */}
        {viewMode === 'list' && (
          <div className="flex-1 h-full bg-black/80 backdrop-blur-md border-[4px] border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.3)] pointer-events-auto overflow-auto p-6">
            <ListView 
              spots={HOT_POT_DATA} 
              onSelect={(place: HotPotPlace) => setSelectedPlace(place)} 
            />
          </div>
        )}
      </div>
    </main>
  );
}