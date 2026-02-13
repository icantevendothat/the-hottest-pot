'use client';
import { HotPotPlace } from '@/data/spots';

export default function ListView({ spots, onSelect }: { spots: HotPotPlace[], onSelect: (p: HotPotPlace) => void }) {
  const headers = ["Spot", "Taste", "Soup", "Sauce", "Ingredients", "Vibe", "Value", "Total"];
  
  return (
    <div className="w-full font-sans text-white">
      <div className="grid grid-cols-8 border-l-[2px] border-t-[2px] border-red-600 bg-black">
        {headers.map(h => (
          <div key={h} className={`p-2 border-r-[2px] border-b-[2px] border-red-600 bg-red-600/10 text-[7px] font-black uppercase text-center tracking-widest ${h === 'Total' ? 'text-white' : 'text-red-400'}`}>
            {h}
          </div>
        ))}
        {spots.map((spot) => {
          // Calculate average based on real-world ratings
          const ratings = Object.values(spot.ratings);
          const average = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);

          return (
            <div key={spot.id} className="contents group">
              <div 
                onClick={() => onSelect(spot)} 
                className="p-2 border-r-[2px] border-b-[2px] border-red-600 font-black uppercase text-[10px] hover:bg-red-600 hover:text-black transition-colors cursor-pointer leading-tight flex items-center"
              >
                {spot.name}
              </div>
              
              {/* Individual Scores scaled down to text-sm */}
              {[spot.ratings.overall, spot.ratings.soup, spot.ratings.sauce, spot.ratings.ingredients, spot.ratings.atmosphere, spot.ratings.value].map((val, i) => (
                <div key={i} className="p-2 border-r-[2px] border-b-[2px] border-red-600 text-center font-black text-sm text-red-600 flex items-center justify-center">
                  {val}
                </div>
              ))}
              
              {/* Total/Average Column scaled down to text-sm */}
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