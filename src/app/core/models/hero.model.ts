export interface Hero {
  id: number;
  name: string;
  image: string;
  fullName: string;
  powerstats: HeroPowerstats;
}

export interface HeroResponse {
  id: string;
  name: string;
  image: {
    url: string;
  };
  biography: {
    'full-name': string;
  };
  powerstats: HeroPowerstats;
}

export interface HeroPowerstats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
  [key: string]: any;
}
