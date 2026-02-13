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
      <div className="absolute inset-0 z-0">
        <MapComponent 
          savedSpots={HOT_POT_DATA} 
          onSelectPlace={(place: HotPotPlace) => setSelectedPlace(place)} 
        />
      </div>

      <div className="absolute inset-0 md:inset-4 z-10 flex flex-col md:flex-row gap-2 md:gap-4 pointer-events-none">
        
        <div className="w-full md:w-[380px] h-fit md:h-full p-2 md:p-0 pointer-events-auto shrink-0">
          <Sidebar 
            viewMode={viewMode}
            setViewMode={setViewMode}
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace} 
          />
        </div>

        {viewMode === 'list' && (
          <div className="flex-1 h-full bg-black/80 backdrop-blur-md border-[4px] border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.3)] pointer-events-auto overflow-auto m-2 md:m-0 p-2 md:p-6">
            <ListView 
              spots={HOT_POT_DATA} 
              onSelect={(place: HotPotPlace) => setSelectedPlace(place)} 
            />
          </div>
        )}

        <div className="flex-1 md:hidden pointer-events-none" />
      </div>
    </main>
  );
}