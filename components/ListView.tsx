'use client';
import { HotPotPlace } from '@/data/spots';

export default function ListView({ spots, onSelect }: { spots: HotPotPlace[], onSelect: (p: HotPotPlace) => void }) {
  
  // Refined Sort: Handles strings, numbers, and undefined explicitly
  const sortedSpots = [...spots].sort((a, b) => {
    const getNumericScore = (place: HotPotPlace) => {
      const val = place.ratings.overall;
      if (typeof val === 'number') return val;
      if (typeof val === 'string' && val !== 'n/a') return parseFloat(val) || -1;
      return -1; // Push 'n/a' or 0 to the bottom
    };

    return getNumericScore(b) - getNumericScore(a);
  });

  const headerMap = [
    { short: "Spot", full: "Spot" },
    { short: "Sop", full: "Soup" },
    { short: "Sau", full: "Sauce" },
    { short: "Ing", full: "Ingredients" },
    { short: "Vib", full: "Vibe" },
    { short: "Val", full: "Value" },
    { short: "Ovr", full: "Overall" }
  ];

  return (
    <div className="w-full font-sans text-white bg-black">
      <div className="grid grid-cols-7 border-l-[2px] border-t-[2px] border-red-600 bg-black">
        {headerMap.map(h => (
          <div key={h.full} className={`p-1 md:p-2 border-r-[2px] border-b-[2px] border-red-600 bg-red-600/10 text-[6px] md:text-[7px] font-black uppercase text-center tracking-tighter md:tracking-widest flex items-center justify-center ${h.full === 'Overall' ? 'text-white bg-red-600/20' : 'text-red-400'}`}>
            <span className="md:hidden">{h.short}</span>
            <span className="hidden md:inline">{h.full}</span>
          </div>
        ))}

        {sortedSpots.map((spot) => {
          const overallScore = spot.ratings.overall === 'n/a' ? '-' : spot.ratings.overall;

          return (
            <div key={spot.id} className="contents group">
              <div 
                onClick={() => onSelect(spot)} 
                className="p-1 md:p-2 border-r-[2px] border-b-[2px] border-red-600 font-black uppercase text-[7px] md:text-[10px] hover:bg-red-600 hover:text-black transition-colors cursor-pointer leading-tight flex items-center overflow-hidden"
              >
                <span className="truncate">{spot.name}</span>
              </div>
              
              {[
                spot.ratings.soup, 
                spot.ratings.sauce, 
                spot.ratings.ingredients, 
                spot.ratings.atmosphere, 
                spot.ratings.value
              ].map((val, i) => (
                <div key={i} className="p-1 md:p-2 border-r-[2px] border-b-[2px] border-red-600 text-center font-black text-[8px] md:text-sm text-red-600 flex items-center justify-center">
                  {val === 'n/a' ? '-' : val}
                </div>
              ))}
              
              <div className="p-1 md:p-2 border-r-[2px] border-b-[2px] border-red-600 text-center font-black text-[8px] md:text-sm text-white bg-red-600/20 flex items-center justify-center">
                {overallScore}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
