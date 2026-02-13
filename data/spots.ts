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
  imageUrl?: string; 
  ratings: Ratings;
  reviewText: string; 
};

export const HOT_POT_DATA: HotPotPlace[] = [
  {
    id: '1',
    name: "Hai Di Lao HuoGuo",
    rank: "Premium",
    address: "138-23 39th Ave, Queens, NY",
    location: { lat: 40.7592, lng: -73.8315 },
    ratings: { overall: "4.3", soup: 4.5, sauce: 5, ingredients: 5, atmosphere: 4, value: 3 },
    reviewText: "Yes. It's expensive. If you can afford it, it's worth it. It's like the Disneyland of Hot Pot."
  },
  {
    id: '2',
    name: "Hou Yi Hot Pot",
    rank: "Unrated",
    address: "92 Hester St, New York, NY",
    location: { lat: 40.7165, lng: -73.9937 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""
  },
  {
    id: '3',
    name: "Nanshan Hot Pot - Flushing",
    rank: "Unrated",
    address: "136-20 38th Ave, Flushing, NY 11354",
    location: { lat: 40.7599, lng: -73.8310 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""
  },
  {
    id: '4',
    name: "Shoo Loong Kan Hot Pot Manhattan",
    rank: "Unrated",
    address: "131 Bowery, New York, NY 10002",
    location: { lat: 40.7192, lng: -73.9942 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""
  },
  {
    id: '5',
    name: "Nan Hotpot",
    rank: "Unrated",
    address: "38-12 Prince St, Flushing, NY 11354",
    location: { lat: 40.7604, lng: -73.8331 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '6',
    name: "BeiJing Hot Pot",
    rank: "Unrated",
    address: "133-51 37th Ave, Flushing, NY 11354",
    location: { lat: 40.7608, lng: -73.8322 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '7',
    name: "Kungfu Hot Pot",
    rank: "Unrated",
    address: "39-07 Prince St, Flushing, NY 11354",
    location: { lat: 40.7597, lng: -73.8329 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '8',
    name: "ER Hot Pot - 6th Ave",
    rank: "Unrated",
    address: "654 6th Ave, New York, NY 10010",
    location: { lat: 40.7411, lng: -73.9928 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""
  },
  {
    id: '9',
    name: "Nanshan Hot Pot - Bayside",
    rank: "Unrated",
    address: "209-18 Northern Blvd, Bayside, NY 11361",
    location: { lat: 40.7590, lng: -73.7745 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""
  },
  {
    id: '10',
    name: "Mikiya Wagyu Shabu House",
    rank: "Unrated",
    address: "136-20 38th Ave, Flushing, NY 11354",
    location: { lat: 40.7599, lng: -73.8310 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '11',
    name: "The Dolar Shop Hot Pot Manhattan",
    rank: "Unrated",
    address: "55 3rd Ave, New York, NY 10003",
    location: { lat: 40.7303, lng: -73.9890 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '12',
    name: "KPOT Korean BBQ & Hot Pot (Manhattan)",
    rank: "Skip...",
    address: "306 W 40th St, New York, NY 10018",
    location: { lat: 40.7558, lng: -73.9908 },
    ratings: { overall: 2.6, soup: 3, sauce: 3, ingredients: 2, atmosphere: 2, value: 3 },
    reviewText: "Nothing special. Meat was kind of suspicious. Service was wonderful though."  
  },
  {
    id: '13',
    name: "99 Favor Taste",
    rank: "Premium",
    address: "285 Grand St, New York, NY 10002",
    location: { lat: 40.7176, lng: -73.9925 },
    ratings: { overall: "4.5", soup: "4", sauce: "5", ingredients: "5", atmosphere: "4", value: "4.5" },
    reviewText: "Our first hot pot together ❤️. Classic choice. No notes."  
  },
  {
    id: '14',
    name: "Happy Lamb Hot Pot",
    rank: "Unrated",
    address: "136-59 37th Ave, Flushing, NY 11354",
    location: { lat: 40.7601, lng: -73.8295 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '15',
    name: "Xiang La Hot Pot",
    rank: "Unrated",
    address: "5816 8th Ave, Brooklyn, NY 11220",
    location: { lat: 40.6361, lng: -74.0094 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '16',
    name: "Mala Hot Pot",
    rank: "Unrated",
    address: "220 E 14th St, New York, NY 10003",
    location: { lat: 40.7326, lng: -73.9868 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '17',
    name: "Sanku Maots'ai",
    rank: "Unrated",
    address: "135-21 40th Rd, Flushing, NY 11354",
    location: { lat: 40.7145, lng: -73.9982 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '18',
    name: "Easy Joy Dim Sum & AYCE Hot Pot",
    rank: "Unrated",
    address: "103 Mott St, New York, NY 10013",
    location: { lat: 40.7171, lng: -73.9981 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '19',
    name: "De Zhuang Hot Pot",
    rank: "Unrated",
    address: "52 Bowery, New York, NY 10013",
    location: { lat: 40.7155, lng: -73.9968 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '20',
    name: "Joypot",
    rank: "Unrated",
    address: "212-02 Northern Blvd, Bayside, NY 11361",
    location: { lat: 40.7592, lng: -73.7715 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '21',
    name: "LaoJie Hotpot",
    rank: "Unrated",
    address: "811 54th St, Brooklyn, NY 11220",
    location: { lat: 40.6385, lng: -74.0055 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '22',
    name: "Liuyishou Hot Pot",
    rank: "Unrated",
    address: "136-76 39th Ave, Flushing, NY 11354",
    location: { lat: 40.7589, lng: -73.8278 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '23',
    name: "Zhang Liang Spicy Hot Pot",
    rank: "Unrated",
    address: "133-35 Roosevelt Ave, Flushing, NY 11354",
    location: { lat: 40.7591, lng: -73.8328 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '24',
    name: "SuanQ Guizhou Hot Pot",
    rank: "Unrated",
    address: "136-11 38th Ave, Flushing, NY 11354",
    location: { lat: 40.7602, lng: -73.8315 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '25',
    name: "B2J Tasty Pot Bayside",
    rank: "Unrated",
    address: "208-17 Northern Blvd, Bayside, NY 11361",
    location: { lat: 40.7592, lng: -73.7752 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '26',
    name: "Qing Shu Spicy Hot Pot",
    rank: "Unrated",
    address: "37-17 Prince St, Flushing, NY 11354",
    location: { lat: 40.7615, lng: -73.8335 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '27',
    name: "Hot Stix Hot Pot & BBQ",
    rank: "Unrated",
    address: "38-06 Prince St, Flushing, NY 11354",
    location: { lat: 40.7607, lng: -73.8331 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '28',
    name: "Spice Lamb",
    rank: "Unrated",
    address: "136-51 37th Ave, Flushing, NY 11354",
    location: { lat: 40.7602, lng: -73.8302 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '29',
    name: "Mr.Liu Hot Pot",
    rank: "Unrated",
    address: "133-25 Roosevelt Ave, Flushing, NY 11354",
    location: { lat: 40.7588, lng: -73.8335 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '30',
    name: "Jongro BBQ Market",
    rank: "Unrated",
    address: "155-14 Northern Blvd, Flushing, NY 11354",
    location: { lat: 40.7645, lng: -73.8092 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '31',
    name: "Growl Growl",
    rank: "Unrated",
    address: "135-15 40th Rd, Flushing, NY 11354",
    location: { lat: 40.7585, lng: -73.8305 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '32',
    name: "Da Long Yi Hot Pot",
    rank: "Unrated",
    address: "159 Canal St, New York, NY 10013",
    location: { lat: 40.7171, lng: -73.9985 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '33',
    name: "Mt. ShooTao Hot Pot",
    rank: "Unrated",
    address: "39-16 Prince St, Flushing, NY 11354",
    location: { lat: 40.7594, lng: -73.8333 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '34',
    name: "Show Mini Hot Pot",
    rank: "Unrated",
    address: "136-20 Roosevelt Ave, Flushing, NY 11354",
    location: { lat: 40.7595, lng: -73.8301 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '35',
    name: "Xi Yue Hui Hot Pot",
    rank: "Unrated",
    address: "136-21 Latimer Pl, Flushing, NY 11354",
    location: { lat: 40.7631, lng: -73.8305 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '36',
    name: "Hometown Hotpot & BBQ",
    rank: "Unrated",
    address: "194 Grand St, New York, NY 10013",
    location: { lat: 40.7191, lng: -73.9959 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '37',
    name: "Funny BBQ 98",
    rank: "Unrated",
    address: "98 Bowery, New York, NY 10013",
    location: { lat: 40.7175, lng: -73.9961 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '38',
    name: "Da Long Yi Hot Pot (LIC)",
    rank: "Unrated",
    address: "42-22 Crescent St, Long Island City, NY 11101",
    location: { lat: 40.7505, lng: -73.9402 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: '39',
    name: "Lucky Star (Berlin)",
    rank: "Premium",
    address: "Friedrichstraße 127, 10117 Berlin, Germany",
    location: {lat: 52.5254779, lng: 13.3870788 }, 
    ratings: { overall: "4.4", soup: "4", sauce: "4", ingredients: "4", atmosphere: "5", value: "5" },
    reviewText: "We love this place. Great staff, great food, great value. They don't have a sauce bar but they do give you some key ingredients to make your own sauce at the table. Can't wait to make it back here one day."  
  },
  {
    id: '40',
    name: "Joypot (LIC)",
    rank: "Unrated",
    address: "23-10 Jackson Ave, Long Island City, NY 11101",
    location: { lat: 40.7461, lng: -73.9439 },
    ratings: { overall: "n/a", soup: "n/a", sauce: "n/a", ingredients: "n/a", atmosphere: "n/a", value: "n/a" },
    reviewText: ""  
  },
  {
    id: "41",
    name: "Chongqing Lao Zao 重慶老灶",
    rank: "Unrated",
    address: "37-04 Prince St, Flushing, NY 11354",
    location: { lat: 40.76008, lng: -73.83296 },
    ratings: {
      overall: "n/a",
      soup: "n/a",
      sauce: "n/a",
      ingredients: "n/a",
      atmosphere:"n/a",
      value: "n/a"
    },
    reviewText: ""
  }
];