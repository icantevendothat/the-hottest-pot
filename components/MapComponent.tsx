'use client';

import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { HotPotPlace } from '@/data/spots';

export default function MapComponent({ 
  savedSpots,
  onSelectPlace 
}: { 
  savedSpots: HotPotPlace[], 
  onSelectPlace: (place: HotPotPlace) => void 
}) {
  const center = { lat: 40.7306, lng: -73.9352 }; // NYC Center
  
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <Map
          defaultZoom={11.5} 
          defaultCenter={{ lat: 40.7250, lng: -73.8750 }} 
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
              {/* Custom Red Pin */}
              <Pin background={'#DC2626'} glyphColor={'#000'} borderColor={'#991B1B'} />
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}