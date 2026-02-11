'use client';
import { HotPotPlace } from '@/data/spots';

export default function ListView({ 
  spots, 
  onSelect 
}: { 
  spots: HotPotPlace[], 
  onSelect: (place: HotPotPlace) => void 
}) {
  return (
    <div className="h-full w-full bg-black overflow-auto p-4 md:p-12">
      <div className="border-2 border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.2)]">
        <table className="w-full border-collapse text-left">
          
          {/* Table Header */}
          <thead className="bg-red-900/20 text-red-500 font-bold uppercase text-xs tracking-wider">
            <tr>
              <th className="p-4 border border-red-600">Spot</th>
              <th className="p-4 border border-red-600">Overall</th>
              <th className="p-4 border border-red-600 hidden lg:table-cell">Soup</th>
              <th className="p-4 border border-red-600 hidden lg:table-cell">Sauce</th>
              <th className="p-4 border border-red-600 hidden lg:table-cell">Ingred.</th>
              <th className="p-4 border border-red-600 hidden lg:table-cell">Vibe</th>
              <th className="p-4 border border-red-600 hidden lg:table-cell">Value</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="font-mono text-sm text-gray-300">
            {spots.map((spot) => (
              <tr 
                key={spot.id} 
                onClick={() => onSelect(spot)}
                className="hover:bg-red-900/40 cursor-pointer transition-colors group"
              >
                <td className="p-4 border border-red-600 font-bold text-white group-hover:text-red-400">
                  {spot.name}
                  <div className="lg:hidden text-[10px] text-gray-500 mt-1">{spot.rank}</div>
                </td>
                <td className="p-4 border border-red-600 text-red-500 font-bold">{spot.ratings.overall}</td>
                <td className="p-4 border border-red-600 hidden lg:table-cell">{spot.ratings.soup}</td>
                <td className="p-4 border border-red-600 hidden lg:table-cell">{spot.ratings.sauce}</td>
                <td className="p-4 border border-red-600 hidden lg:table-cell">{spot.ratings.ingredients}</td>
                <td className="p-4 border border-red-600 hidden lg:table-cell">{spot.ratings.atmosphere}</td>
                <td className="p-4 border border-red-600 hidden lg:table-cell">{spot.ratings.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}