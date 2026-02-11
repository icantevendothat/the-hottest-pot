'use client';

export default function SteamRating({ score }: { score: number }) {
  // Create an array of 5 items
  const total = 5;
  
  return (
    <div className="flex space-x-1" title={`${score} out of 5`}>
      {[...Array(total)].map((_, i) => (
        <span 
          key={i} 
          className={`text-lg leading-none transition-colors ${
            // If the index is less than the score, make it RED. Otherwise, dark gray.
            i < Math.round(score) ? 'text-red-600' : 'text-gray-800'
          }`}
        >
         ♨️
        </span>
      ))}
    </div>
  );
}