'use client';
import { HotPotPlace } from '@/data/spots';

export default function ListView({ spots, onSelect }: { spots: HotPotPlace[], onSelect: (p: HotPotPlace) => void }) {
  const headers = ["Spot", "Taste", "Soup", "Sauce", "Ingredients", "Vibe", "Value", "Total"];
  
  return (
    <div className="w-full font-sans text-white">
      <div className="grid grid-cols-8 border-l-[2px] border-t-[2px] border-red-600 bg-black">
        {headers.map(h => (
          <div key={h} className={`p-4 border-r-[2px] border-b-[2px] border-red-600 bg-red-600/10 text-[8px] font-black uppercase text-center tracking-widest ${h === 'Total' ? 'text-white' : 'text-red-400'}`}>
            {h}
          </div>
        ))}
        {spots.map((spot) => {
          // Calculate average
          const ratings = Object.values(spot.ratings);
          const average = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);

          return (
            <div key={spot.name} className="contents">
              <div 
                onClick={() => onSelect(spot)} 
                className="p-4 border-r-[2px] border-b-[2px] border-red-600 font-black uppercase text-base cursor-pointer hover:bg-red-600 hover:text-black transition-colors leading-tight flex items-center"
              >
                {spot.name}
              </div>
              {/* Individual Scores */}
              {[spot.ratings.overall, spot.ratings.soup, spot.ratings.sauce, spot.ratings.ingredients, spot.ratings.atmosphere, spot.ratings.value].map((val, i) => (
                <div key={i} className="p-4 border-r-[2px] border-b-[2px] border-red-600 text-center font-black text-xl text-red-600 flex items-center justify-center">
                  {val}
                </div>
              ))}
              {/* Total/Average Column */}
              <div className="p-4 border-r-[2px] border-b-[2px] border-red-600 text-center font-black text-xl text-white bg-red-600/20 flex items-center justify-center">
                {average}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 'use client';
// export default function ListView({ spots, onSelect }: any) {
//   const headers = ["Spot", "Taste", "Soup", "Sauce", "Ingredients", "Vibe", "Value"];
  
//   return (
//     <div className="w-full font-sans text-white">
//       <div className="grid grid-cols-7 border-l-[2px] border-t-[2px] border-red-600">
//         {headers.map(h => (
//           <div key={h} className="p-4 border-r-[2px] border-b-[2px] border-red-600 bg-red-600/10 text-[10px] font-black uppercase text-center tracking-widest">
//             {h}
//           </div>
//         ))}
//         {spots.map((spot: any) => (
//           <>
//             <div 
//               onClick={() => onSelect(spot)} 
//               className="p-4 border-r-[2px] border-b-[2px] border-red-600 font-black uppercase text-xl cursor-pointer hover:bg-red-600 hover:text-black leading-none"
//             >
//               {spot.name}
//             </div>
//             {/* Ratings Cells */}
//             {[spot.ratings.overall, spot.ratings.soup, spot.ratings.sauce, spot.ratings.ingredients, spot.ratings.atmosphere, spot.ratings.value].map((val, i) => (
//               <div key={i} className="p-4 border-r-[2px] border-b-[2px] border-red-600 text-center font-black text-2xl text-red-500">
//                 {val}
//               </div>
//             ))}
//           </>
//         ))}
//       </div>
//     </div>
//   );
// }