'use client';
import { HotPotPlace } from '@/data/spots';

export default function ListView({ spots, onSelect }: { spots: HotPotPlace[], onSelect: (p: HotPotPlace) => void }) {
  const headers = ["Spot", "Taste", "Soup", "Sauce", "Ingredients", "Vibe", "Value", "Total"];
  
  // Explicitly tell TS this helper always returns a number
  const getScore = (val: number | string): number => {
    if (typeof val === 'string') return 0;
    return val;
  };

  return (
    <div className="w-full font-sans text-white">
      <div className="grid grid-cols-8 border-l-[2px] border-t-[2px] border-red-600 bg-black">
        {headers.map(h => (
          <div key={h} className={`p-2 border-r-[2px] border-b-[2px] border-red-600 bg-red-600/10 text-[7px] font-black uppercase text-center tracking-widest ${h === 'Total' ? 'text-white' : 'text-red-400'}`}>
            {h}
          </div>
        ))}
        {spots.map((spot) => {
          // Get ratings as an array of (string | number)
          const rawRatings = Object.values(spot.ratings);
          
          // FIX: Explicitly type the accumulator 'a' as number and use getScore for 'b'
          const totalNumericalScore = rawRatings.reduce((a: number, b) => a + getScore(b), 0);
          
          // FIX: Use the calculated total (a pure number) for the average
          const average = totalNumericalScore > 0 
            ? (totalNumericalScore / rawRatings.length).toFixed(1) 
            : "N/A";

          return (
            <div key={spot.id} className="contents group">
              <div 
                onClick={() => onSelect(spot)} 
                className="p-2 border-r-[2px] border-b-[2px] border-red-600 font-black uppercase text-[10px] hover:bg-red-600 hover:text-black transition-colors cursor-pointer leading-tight flex items-center"
              >
                {spot.name}
              </div>
              
              {/* Render each rating value directly */}
              {[
                spot.ratings.overall, 
                spot.ratings.soup, 
                spot.ratings.sauce, 
                spot.ratings.ingredients, 
                spot.ratings.atmosphere, 
                spot.ratings.value
              ].map((val, i) => (
                <div key={i} className="p-2 border-r-[2px] border-b-[2px] border-red-600 text-center font-black text-sm text-red-600 flex items-center justify-center">
                  {val}
                </div>
              ))}
              
              <div className="p-2 border-r-[2px] border-b-[2px] border-red-600 text-center font-black text-sm text-white bg-red-600/20 flex items-center justify-center">
                {average}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}