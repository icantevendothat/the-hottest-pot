'use client';

interface SteamRatingProps {
  score: number;
  size?: number; 
}

export default function SteamRating({ score, size = 20 }: SteamRatingProps) {
  const getSteamIcon = () => {
    if (score >= 4) return '/redsteam.png';
    if (score >= 3) return '/orangesteam.png';
    return '/yellowsteam.png';
  };

  const iconPath = getSteamIcon();

  return (
    <div className="flex gap-0.5 items-center" title={`${score} out of 5`}>
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={iconPath}
          alt="steam-rating"
          style={{ 
            width: `${size}px`, 
            height: `${size}px`,
            opacity: i < Math.floor(score) ? 1 : 0.2 
          }}
          className="object-contain"
        />
      ))}
    </div>
  );
}