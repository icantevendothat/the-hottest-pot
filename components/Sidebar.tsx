'use client';
import { HotPotPlace } from '@/data/spots';
import SteamRating from './SteamRating';
import Link from 'next/link';

export default function Sidebar({ viewMode, setViewMode, selectedPlace }: any) {
  return (
    <div className="flex flex-col h-full bg-black border-[4px] border-red-600 p-8 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] font-sans">
      {/* 1. SMALLER LOGO */}
      <h1 className="text-4xl font-black leading-[0.8] uppercase tracking-tighter mb-10">
        THE <br /> HOTTEST <br /> POT <span className="text-red-600 text-2xl">♨️</span>
      </h1>

      {/* Toggle */}
      <div className="flex w-full border-[3px] border-red-600 mb-8 bg-black overflow-hidden">
        <button 
          onClick={() => setViewMode('map')} 
          className={`flex-1 py-3 font-black uppercase text-[10px] tracking-widest ${viewMode === 'map' ? 'bg-red-600 text-white' : 'text-white'}`}
        >
          Map
        </button>
        <button 
          onClick={() => setViewMode('list')} 
          className={`flex-1 py-3 font-black uppercase text-[10px] tracking-widest ${viewMode === 'list' ? 'bg-red-600 text-white' : 'text-white'}`}
        >
          List
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {!selectedPlace ? (
          <div className="h-full flex flex-col items-center justify-center opacity-30">
            <p className="text-center uppercase font-black text-[9px] tracking-[0.3em] leading-relaxed">
              Click a spot for <br /> full review
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* 2. SMALLER RESTAURANT NAME */}
            <h2 className="text-2xl font-black uppercase leading-tight border-b-4 border-red-600 pb-2">
              {selectedPlace.name}
            </h2>
            
            {selectedPlace.image && (
              <div className="border-[2px] border-white">
                <img src={selectedPlace.image} className="w-full h-40 object-cover grayscale hover:grayscale-0 transition-all duration-500" alt={selectedPlace.name} />
              </div>
            )}

            <div className="space-y-2 uppercase text-[10px] font-black tracking-[0.15em]">
              <div className="flex justify-between border-b border-white/10 pb-1 text-red-500">Taste <SteamRating score={selectedPlace.ratings.overall} /></div>
              <div className="flex justify-between border-b border-white/10 pb-1 text-red-500">Soup <SteamRating score={selectedPlace.ratings.soup} /></div>
              <div className="flex justify-between border-b border-white/10 pb-1 text-red-500">Sauce <SteamRating score={selectedPlace.ratings.sauce} /></div>
            </div>

            <button className="w-full py-2 border-2 border-white font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all">
              Full Review
            </button>
          </div>
        )}
      </div>

      <div className="mt-8">
        <Link href="/about">
          <button className="font-black uppercase text-[10px] border-b-2 border-white pb-0.5 hover:text-red-600 hover:border-red-600 transition-colors">
            About
          </button>
        </Link>
      </div>
    </div>
  );
}

// 'use client';
// import { HotPotPlace } from '@/data/spots';
// import SteamRating from './SteamRating';

// interface SidebarProps {
//   viewMode: 'map' | 'list';
//   setViewMode: (mode: 'map' | 'list') => void;
//   selectedPlace: HotPotPlace | null;
// }

// export default function Sidebar({ viewMode, setViewMode, selectedPlace }: SidebarProps) {
//   return (
//     <div className="flex flex-col h-full bg-black border-[4px] border-red-600 p-8 shadow-[0_0_30px_rgba(220,38,38,0.3)] text-white font-sans">
//       <h1 className="text-5xl font-black leading-[0.8] uppercase tracking-tighter mb-10">
//         THE <br /> HOTTEST <br /> POT <span className="text-red-600">♨️</span>
//       </h1>

//       {/* Toggle: Active = Red background + White text */}
//       <div className="flex w-full border-[3px] border-red-600 mb-8 bg-black">
//         <button 
//           onClick={() => setViewMode('map')} 
//           className={`flex-1 py-3 font-black uppercase text-[11px] tracking-widest transition-all ${
//             viewMode === 'map' ? 'bg-red-600 text-white' : 'text-white hover:bg-red-900/20'
//           }`}
//         >
//           Map
//         </button>
//         <button 
//           onClick={() => setViewMode('list')} 
//           className={`flex-1 py-3 font-black uppercase text-[11px] tracking-widest transition-all ${
//             viewMode === 'list' ? 'bg-red-600 text-white' : 'text-white hover:bg-red-900/20'
//           }`}
//         >
//           List
//         </button>
//       </div>

//       <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
//         {!selectedPlace ? (
//           <p className="text-center uppercase font-black text-[10px] tracking-[0.2em] mt-20 opacity-30 italic">
//             Select a location on the map
//           </p>
//         ) : (
//           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
//             <h2 className="text-3xl font-black uppercase leading-none border-b-4 border-red-600 pb-2">
//               {selectedPlace.name}
//             </h2>
//             {selectedPlace.image && (
//               <img src={selectedPlace.image} className="w-full border-[3px] border-white" alt="Restaurant" />
//             )}
//             <div className="space-y-3 uppercase text-[10px] font-black tracking-widest">
//               <div className="flex justify-between border-b border-white/10 pb-1">Taste <SteamRating score={selectedPlace.ratings.overall} /></div>
//               <div className="flex justify-between border-b border-white/10 pb-1">Soup <SteamRating score={selectedPlace.ratings.soup} /></div>
//               <div className="flex justify-between border-b border-white/10 pb-1">Sauce <SteamRating score={selectedPlace.ratings.sauce} /></div>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="mt-8">
//         <button className="font-black uppercase text-xs border-b-2 border-white pb-0.5 hover:text-red-600 hover:border-red-600 transition-colors">
//           About
//         </button>
//       </div>
//     </div>
//   );
// }

