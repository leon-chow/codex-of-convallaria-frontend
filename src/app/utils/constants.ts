export const API_URL = "http://localhost:5000/v1/api";

export interface IUnit {
  name: string;
  rarity: string;
  imageUrl: string;
  spriteUrl: string;
  count?: number;
}

export type GACHA_RATES_TYPE = {
  [key: string]: number;
}

export const UNIT_RARITY = {
  legendary: "legendary",
  epic: "epic",
  rare: "rare",
  common: "common",
}

export enum EUnitRarity {
  "legendary" = 4,
  "epic" = 3,
  "rare" = 2,
  "common" = 1,
}

export const GACHA_RATES: GACHA_RATES_TYPE = {
  "legendary": 0.02,
  "epic": 0.20,
  "rare": 0.40,
  "common": 0.38,
}

export const PITY = {
  global: 100,
  destined: 180,
}

export type ALL_UNITS_TYPE = {
  [key: string]: object[];
}

export const FEATURED_UNITS = [
  {
    name: "Gloria",
    bannerType: "debut",
    imageUrl: "test", 
    spriteUrl: "test",
  },
  /* {
    name: "Col & Beryl",
    bannerType: "double", 
    imageUrl: "test", 
    spriteUrl: "test",
  },
  {
    name: "Nungal & Garcia",
    bannerType: "double", 
    imageUrl: "test", 
    spriteUrl: "test",
  }, */
  {
    name: "Edda",
    bannerType: "debut", 
    imageUrl: "test", 
    spriteUrl: "test",
  },
  /* {
    name: "LilyWill & Alexei",
    bannerType: "double", 
    imageUrl: "test", 
    spriteUrl: "test",
  }, */
  {
    name: "Simona",
    bannerType: "debut", 
    imageUrl: "test", 
    spriteUrl: "test",
  },
  /* {
    name: "LilyWill & Momo",
    bannerType: "double", 
    imageUrl: "test", 
    spriteUrl: "test",
  }, */
  {
    name: "Safiyyah",
    bannerType: "debut", 
    imageUrl: "test", 
    spriteUrl: "test",
  },
  {
    name: "Cocoa",
    bannerType: "debut", 
    imageUrl: "test", 
    spriteUrl: "test",
  },
  {
    name: "Auguste",
    bannerType: "debut", 
    imageUrl: "test", 
    spriteUrl: "test",
  },
];

export const ALL_STANDARD_UNITS: ALL_UNITS_TYPE = {
  "legendary": [
    { name: "Nungal", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Nergel", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Simona", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Leonide", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Iggy", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Magnus", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Edda", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Garcia", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Momo", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Inanna", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Col", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Alexei", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Faycal", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "LilyWill", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Teadon", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Guzman", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "NonoWill", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Dantalion", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Rawiyah", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Xavier", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Maitha", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Beryl", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Samantha", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
    { name: "Miguel", rarity: "legendary", imageUrl: "test", spriteUrl: "test" },
  ],
  "epic": [
    { name: "Nightraven", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Lightning", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Blade", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Lash", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Flare", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Ballista", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Agile Eye", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Might", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Divine Grace", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Abyss", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Enforcer", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Stinger", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Stormbreaker", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Flame Sorceress", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Supression", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Nightingale", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Crimson Falcon", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Angel", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Tempest", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Candlelight", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
    { name: "Butterfly", rarity: "epic", imageUrl: "test", spriteUrl: "test" },
  ],
  "rare": [
    { name: "Papal Guard", rarity: "rare", imageUrl: "test", spriteUrl: "test" },
    { name: "Papal Spearman", rarity: "rare", imageUrl: "test", spriteUrl: "test" },
    { name: "Knighted Guard", rarity: "rare", imageUrl: "test", spriteUrl: "test" },
    { name: "Knighted Spearman", rarity: "rare", imageUrl: "test", spriteUrl: "test" },
    { name: "KA Archer", rarity: "rare", imageUrl: "test", spriteUrl: "test" },
    { name: "KA Sorceress", rarity: "rare", imageUrl: "test", spriteUrl: "test" },
    { name: "Darklight Ice Priest", rarity: "rare", imageUrl: "test", spriteUrl: "test" },
    { name: "Papal Ice Priest", rarity: "rare", imageUrl: "test", spriteUrl: "test" },
    { name: "Darklight Pyromancer", rarity: "rare", imageUrl: "test", spriteUrl: "test" },
    { name: "KA Spearman", rarity: "rare", imageUrl: "test", spriteUrl: "test" },
    { name: "KA Guard", rarity: "rare", imageUrl: "test", spriteUrl: "test" },
    { name: "KA Healer", rarity: "rare", imageUrl: "test", spriteUrl: "test" },
    { name: "Vlderian Scout", rarity: "rare", imageUrl: "test", spriteUrl: "test" },
  ],
  "common": [
    { name: "Outlaw Spearman", rarity: "common", imageUrl: "test", spriteUrl: "test" },
    { name: "Outlaw Assassin", rarity: "common", imageUrl: "test", spriteUrl: "test" },
    { name: "Outlaw Archer", rarity: "common", imageUrl: "test", spriteUrl: "test" },
    { name: "Outlaw Crossbowman", rarity: "common", imageUrl: "test", spriteUrl: "test" },
    { name: "Outlaw Guard", rarity: "common", imageUrl: "test", spriteUrl: "test" },
    { name: "Recruited Assassin", rarity: "common", imageUrl: "test", spriteUrl: "test" },
    { name: "Recruited Guard", rarity: "common", imageUrl: "test", spriteUrl: "test" },
    { name: "Recruited Archer", rarity: "common", imageUrl: "test", spriteUrl: "test" },
    { name: "Outlaw Axeman", rarity: "common", imageUrl: "test", spriteUrl: "test" },
    { name: "Recruited Spearman", rarity: "common", imageUrl: "test", spriteUrl: "test" },
  ]
}