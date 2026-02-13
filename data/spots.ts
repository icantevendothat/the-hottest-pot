export type Ratings = {
  overall: number | string;
  soup: number | string;
  sauce: number | string;
  ingredients: number | string;
  atmosphere: number | string;
  value: number | string;
};

export type HotPotPlace = {
  id: string;
  name: string;
  rank: string;      
  address: string;
  location: { lat: number; lng: number };
  imageUrl?: string; // Match this key in the Sidebar
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
    ratings: { overall: "4.3", soup: 4.5, sauce: 5, ingredients: 5, atmosphere: 4, value: 3 },
    reviewText: "The gold standard for service. While wait times are insane, the tomato broth is undefeated."
  },
  {
    id: '2',
    name: "Hou Yi Hot Pot",
    rank: "#8 in NYC",
    address: "92 Hester St, New York, NY",
    location: { lat: 40.7165, lng: -73.9937 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Old school AYCE. It is loud, crowded, and smells amazing. Best value for money in Chinatown."
  },
  {
    id: '3',
    name: "Nanshan Hot Pot - Flushing",
    rank: "Highly Rated",
    address: "136-20 38th Ave, Flushing, NY 11354",
    location: { lat: 40.7599, lng: -73.8310 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "An elite-tier hot pot experience in the heart of Flushing with consistently high quality ingredients."
  },
  {
    id: '4',
    name: "Shoo Loong Kan Hot Pot Manhattan",
    rank: "Popular Choice",
    address: "131 Bowery, New York, NY 10002",
    location: { lat: 40.7192, lng: -73.9942 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Stunning traditional decor and authentic Sichuan spice levels. A must-visit in Manhattan."
  },
  {
    id: '5',
    name: "Nan Hotpot",
    rank: "Top Rated",
    address: "38-12 Prince St, Flushing, NY 11354",
    location: { lat: 40.7604, lng: -73.8331 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Excellent broth depth and premium meat selections. Highly regarded for its authenticity."
  },
  {
    id: '6',
    name: "BeiJing Hot Pot",
    rank: "Authentic Choice",
    address: "133-51 37th Ave, Flushing, NY 11354",
    location: { lat: 40.7608, lng: -73.8322 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Famous for traditional copper pots and authentic Beijing-style lamb."
  },
  {
    id: '7',
    name: "Kungfu Hot Pot",
    rank: "Fan Favorite",
    address: "39-07 Prince St, Flushing, NY 11354",
    location: { lat: 40.7597, lng: -73.8329 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Great energy and high-quality broth options. Very popular for groups."
  },
  {
    id: '8',
    name: "ER Hot Pot - 6th Ave",
    rank: "Midtown Gem",
    address: "654 6th Ave, New York, NY 10010",
    location: { lat: 40.7411, lng: -73.9928 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Vibrant atmosphere with beautiful presentation and solid spicy broth options."
  },
  {
    id: '9',
    name: "Nanshan Hot Pot - Bayside",
    rank: "Queens East",
    address: "209-18 Northern Blvd, Bayside, NY 11361",
    location: { lat: 40.7590, lng: -73.7745 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "The Bayside outpost offers the same high quality as the Flushing flagship with a local feel."
  },
  {
    id: '10',
    name: "Mikiya Wagyu Shabu House",
    rank: "Premium Shabu",
    address: "136-20 38th Ave, Flushing, NY 11354",
    location: { lat: 40.7599, lng: -73.8310 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Focuses on high-end Wagyu shabu-shabu. The meat quality here is exceptional."
  },
  {
    id: '11',
    name: "The Dolar Shop Hot Pot Manhattan",
    rank: "Luxury Pick",
    address: "55 3rd Ave, New York, NY 10003",
    location: { lat: 40.7303, lng: -73.9890 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Upscale individual pots. Known for the shrimp paste and high-end service."
  },
  {
    id: '12',
    name: "KPOT Korean BBQ & Hot Pot (Manhattan)",
    rank: "Best Fusion",
    address: "306 W 40th St, New York, NY 10018",
    location: { lat: 40.7558, lng: -73.9908 },
    ratings: { overall: 2.6, soup: 3, sauce: 3, ingredients: 2, atmosphere: 2, value: 3 },
    reviewText: "Massive variety. High-quality KBBQ and Hot Pot simultaneously."
  },
  {
    id: '13',
    name: "99 Favor Taste",
    rank: "Classic Choice",
    address: "285 Grand St, New York, NY 10002",
    location: { lat: 40.7176, lng: -73.9925 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "The quintessential NYC hot pot birthday spot. Reliable and budget-friendly."
  },
  {
    id: '14',
    name: "Happy Lamb Hot Pot",
    rank: "Soup Specialists",
    address: "136-59 37th Ave, Flushing, NY 11354",
    location: { lat: 40.7601, lng: -73.8295 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Unique because the broth is so flavorful you don't even need a dipping sauce."
  },
  {
    id: '15',
    name: "Xiang La Hot Pot",
    rank: "Underground Gem",
    address: "5816 8th Ave, Brooklyn, NY 11220",
    location: { lat: 40.6361, lng: -74.0094 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Authentic flavors with a focus on traditional Sichuan spice."
  },
  {
    id: '16',
    name: "Mala Hot Pot",
    rank: "Spice Specialist",
    address: "220 E 14th St, New York, NY 10003",
    location: { lat: 40.7326, lng: -73.9868 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Living up to its name with a numbingly authentic Sichuan peppercorn broth."
  },
  {
    id: '17',
    name: "Sanku Maots'ai",
    rank: "Budget Choice",
    address: "135-21 40th Rd, Flushing, NY 11354",
    location: { lat: 40.7145, lng: -73.9982 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Specializes in Maots'ai (hot pot for one). Incredible value."
  },
  {
    id: '18',
    name: "Easy Joy Dim Sum & AYCE Hot Pot",
    rank: "Unique Hybrid",
    address: "103 Mott St, New York, NY 10013",
    location: { lat: 40.7171, lng: -73.9981 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "One of the few spots for both high-quality dim sum and AYCE hot pot."
  },
  {
    id: '19',
    name: "De Zhuang Hot Pot",
    rank: "Global Favorite",
    address: "52 Bowery, New York, NY 10013",
    location: { lat: 40.7155, lng: -73.9968 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "A famous chain from China that delivers consistent, high-grade spicy broth."
  },
  {
    id: '20',
    name: "Joypot",
    rank: "Cozy Corner",
    address: "212-02 Northern Blvd, Bayside, NY 11361",
    location: { lat: 40.7592, lng: -73.7715 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Modern, clean, and great for families. Their ingredients are noticeably fresh."
  },
  {
    id: '21',
    name: "LaoJie Hotpot",
    rank: "Traditional Vibes",
    address: "811 54th St, Brooklyn, NY 11220",
    location: { lat: 40.6385, lng: -74.0055 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "The decor transports you to old-world China. Excellent lamb and beef platters."
  },
  {
    id: '22',
    name: "Liuyishou Hot Pot",
    rank: "Reliable Chain",
    address: "136-76 39th Ave, Flushing, NY 11354",
    location: { lat: 40.7589, lng: -73.8278 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Solid variety and a great sauce bar."
  },
  {
    id: '23',
    name: "Zhang Liang Spicy Hot Pot",
    rank: "Quick & Spicy",
    address: "133-35 Roosevelt Ave, Flushing, NY 11354",
    location: { lat: 40.7591, lng: -73.8328 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Self-service style where you pay by weight. Great for a fast lunch."
  },
  {
    id: '24',
    name: "SuanQ Guizhou Hot Pot",
    rank: "Regional Specialty",
    address: "136-11 38th Ave, Flushing, NY 11354",
    location: { lat: 40.7602, lng: -73.8315 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Specializes in sour soup hot pot from Guizhou."
  },
  {
    id: '25',
    name: "B2J Tasty Pot Bayside",
    rank: "Sichuan Fish Focus",
    address: "208-17 Northern Blvd, Bayside, NY 11361",
    location: { lat: 40.7592, lng: -73.7752 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Famous for their Sauerkraut fish pot. The broth is incredibly savory."
  },
  {
    id: '26',
    name: "Qing Shu Spicy Hot Pot",
    rank: "Casual Hot Pot",
    address: "37-17 Prince St, Flushing, NY 11354",
    location: { lat: 40.7615, lng: -73.8335 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "A great spot for a quick Malatang fix without the full table-service wait."
  },
  {
    id: '27',
    name: "Hot Stix Hot Pot & BBQ",
    rank: "Social Hub",
    address: "38-06 Prince St, Flushing, NY 11354",
    location: { lat: 40.7607, lng: -73.8331 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Neon lights and a high-energy vibe. Excellent for late-night hot pot."
  },
  {
    id: '28',
    name: "Spice Lamb",
    rank: "Lamb Lover's Pick",
    address: "136-51 37th Ave, Flushing, NY 11354",
    location: { lat: 40.7602, lng: -73.8302 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Quality of the lamb meat is the standout here."
  },
  {
    id: '29',
    name: "Mr.Liu Hot Pot",
    rank: "Hidden Value",
    address: "133-25 Roosevelt Ave, Flushing, NY 11354",
    location: { lat: 40.7588, lng: -73.8335 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Small, unpretentious, but the food speaks for itself."
  },
  {
    id: '30',
    name: "Jongro BBQ Market",
    rank: "KBBQ Icon",
    address: "155-14 Northern Blvd, Flushing, NY 11354",
    location: { lat: 40.7645, lng: -73.8092 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Primarily known for KBBQ, but their hot stew/pot options are top-tier."
  },
  {
    id: '31',
    name: "Growl Growl",
    rank: "Modern Fusion",
    address: "135-15 40th Rd, Flushing, NY 11354",
    location: { lat: 40.7585, lng: -73.8305 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Chic interior with a 'New Style' approach. Great for dates."
  },
  {
    id: '32',
    name: "Da Long Yi Hot Pot",
    rank: "Authentic Sichuan",
    address: "159 Canal St, New York, NY 10013",
    location: { lat: 40.7171, lng: -73.9985 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Heavy hitters in the spice department."
  },
  {
    id: '33',
    name: "Mt. ShooTao Hot Pot",
    rank: "Artistic Dining",
    address: "39-16 Prince St, Flushing, NY 11354",
    location: { lat: 40.7594, lng: -73.8333 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Beautifully presented dishes and high-end decor."
  },
  {
    id: '34',
    name: "Show Mini Hot Pot",
    rank: "Quick Bite",
    address: "136-20 Roosevelt Ave, Flushing, NY 11354",
    location: { lat: 40.7595, lng: -73.8301 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Convenient mini pots perfect for a solo shopper."
  },
  {
    id: '35',
    name: "Xi Yue Hui Hot Pot",
    rank: "Seafood Focus",
    address: "136-21 Latimer Pl, Flushing, NY 11354",
    location: { lat: 40.7631, lng: -73.8305 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "The place to go if you want a massive seafood variety."
  },
  {
    id: '36',
    name: "Hometown Hotpot & BBQ",
    rank: "Neighborhood Classic",
    address: "194 Grand St, New York, NY 10013",
    location: { lat: 40.7191, lng: -73.9959 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Reliable AYCE that has been a Chinatown staple for years."
  },
  {
    id: '37',
    name: "Funny BBQ 98",
    rank: "Late Night Spot",
    address: "98 Bowery, New York, NY 10013",
    location: { lat: 40.7175, lng: -73.9961 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "Great combination of charcoal BBQ skewers and hot pot."
  },
  {
    id: '38',
    name: "Da Long Yi Hot Pot (LIC)",
    rank: "Modern Sichuan",
    address: "42-22 Crescent St, Long Island City, NY 11101",
    location: { lat: 40.7505, lng: -73.9402 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "The LIC location features a stunning, sleek interior."
  },
  {
    id: '39',
    name: "Joypot (LIC)",
    rank: "Premium AYCE",
    address: "23-10 Jackson Ave, Long Island City, NY 11101",
    location: { lat: 40.7461, lng: -73.9439 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: "High-quality All-You-Can-Eat with a focus on fresh seafood."
  }
];