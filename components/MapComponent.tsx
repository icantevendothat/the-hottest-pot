'use client';

import { useEffect, useState } from 'react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { HotPotPlace } from '@/data/spots';

export default function MapComponent({ 
  savedSpots,
  onSelectPlace 
}: { 
  savedSpots: HotPotPlace[], 
  onSelectPlace: (place: HotPotPlace) => void 
}) {
  // desktop 
  const desktopCenter = { lat: 40.7200, lng: -73.950 };
  
  // mobile 
  const mobileCenter = { lat: 40.7550, lng: -73.920 };

  const [center, setCenter] = useState(desktopCenter);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setCenter(mobileCenter);
    }
  }, []);
  
  const getCustomIconPath = (score: number | string) => {
    if (score === "n/a" || score === 0) return '/blackemoji.png';
    const numScore = typeof score === 'string' ? parseFloat(score) : score;

    if (numScore >= 4) return '/redsteam.png';
    if (numScore >= 3) return '/orangesteam.png';
    return '/yellowsteam.png';
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
        <Map
          defaultZoom={11.5} 
          defaultCenter={center} 
          mapId="831a6c66556f2bf791bc8729" 
          style={{ width: '100%', height: '100%' }}
          disableDefaultUI={true}
          colorScheme="DARK"
        >
          {savedSpots.map((place) => (
            <AdvancedMarker 
              key={place.id}
              position={place.location}
              onClick={() => onSelectPlace(place)}
            >
              <div className="cursor-pointer transition-transform hover:scale-125 select-none active:scale-95">
                <img 
                  src={getCustomIconPath(place.ratings.overall)} 
                  alt="Hot Pot Pin"
                  className="w-12 h-12 object-contain" 
                  style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.8))' }} 
                />
              </div>
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}