// data/spots.ts

export type Ratings = {
    overall: number;
    soup: number;
    sauce: number;
    ingredients: number;
    atmosphere: number;
    value: number;
  };
  
  export type HotPotPlace = {
    id: string;
    name: string;
    rank: string;      
    address: string;
    location: { lat: number; lng: number };
    imageUrl?: string;  
    ratings: Ratings;
    reviewText: string; 
  };
  
  export const HOT_POT_DATA: HotPotPlace[] = [
    {
      id: '1',
      name: "Hai Di Lao HuoGuo",
      rank: "#5 in NYC",
      address: "138-23 39th Ave, Queens, NY",
      location: { lat: 40.7592, lng: -73.8315 },
      imageUrl: "https://images.unsplash.com/photo-1549203538-9da74d32aa6c?auto=format&fit=crop&w=800&q=80",
      ratings: {
        overall: 4.125,
        soup: 5,
        sauce: 4,
        ingredients: 5,
        atmosphere: 5,
        value: 3
      },
      reviewText: "The gold standard for service. While wait times are insane, the tomato broth is undefeated. The noodle dance is a must-see."
    },
    {
      id: '2',
      name: "Hou Yi Hot Pot",
      rank: "#8 in NYC",
      address: "92 Hester St, New York, NY",
      location: { lat: 40.7165, lng: -73.9937 },
      imageUrl: "https://images.unsplash.com/photo-1626804475297-4110892ae3fc?auto=format&fit=crop&w=800&q=80",
      ratings: {
        overall: 3.8,
        soup: 3,
        sauce: 4,
        ingredients: 4,
        atmosphere: 2,
        value: 5
      },
      reviewText: "Old school AYCE. It is loud, crowded, and smells amazing. Best value for money in Chinatown."
    }
  ];