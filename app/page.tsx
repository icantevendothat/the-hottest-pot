'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import MapComponent from '@/components/MapComponent';
import ListView from '@/components/ListView';
import { HOT_POT_DATA, HotPotPlace } from '@/data/spots';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

export default function Home() {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [selectedPlace, setSelectedPlace] = useState<HotPotPlace | null>(null);

  return (
    // 'flex' makes items sit side-by-side. 'h-screen' ensures it fills the window.
    <main className="flex h-screen w-screen bg-black overflow-hidden">
      {/* SIDEBAR: We give it a fixed width so it doesn't squish */}
      <div className="w-[380px] h-full flex-shrink-0 z-20">
        <Sidebar 
          viewMode={viewMode}
          setViewMode={setViewMode}
          selectedPlace={selectedPlace}
        />
      </div>

      {/* CONTENT AREA: Takes up all remaining space */}
      <div className="flex-1 relative h-full">
        {viewMode === 'map' ? (
          <div className="absolute inset-0">
            <MapComponent 
              savedSpots={HOT_POT_DATA} 
              onSelectPlace={(place) => setSelectedPlace(place)} 
            />
          </div>
        ) : (
          <div className="absolute inset-0 bg-black">
            <ListView 
              spots={HOT_POT_DATA} 
              onSelect={(place) => setSelectedPlace(place)}
            />
          </div>
        )}
      </div>
    </main>
  );
}