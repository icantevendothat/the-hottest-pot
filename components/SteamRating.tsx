'use client';

interface SteamRatingProps {
  score: number;
  size?: number; // Optional prop to control icon size
}

export default function SteamRating({ score, size = 20 }: SteamRatingProps) {
  // 1. Determine which image to use based on the score
  const getSteamIcon = () => {
    if (score >= 4) return '/redsteam.png';
    if (score >= 3) return '/orangesteam.png';
    return '/yellowsteam.png';
  };

  const iconPath = getSteamIcon();

  return (
    <div className="flex gap-0.5 items-center" title={`${score} out of 5`}>
      {/* 2. Map over an array of 5 to create the rating bar */}
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={iconPath}
          alt="steam-rating"
          style={{ 
            width: `${size}px`, 
            height: `${size}px`,
            // If index < score, it's fully visible. Otherwise, dim it to 20%
            opacity: i < Math.floor(score) ? 1 : 0.2 
          }}
          className="object-contain"
        />
      ))}
    </div>
  );
}