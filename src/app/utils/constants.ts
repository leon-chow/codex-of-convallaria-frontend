export const API_URL = "http://localhost:5000/v1/api";

export interface IUnit {
  name: string;
  rarity: string;
  imageUrl: string;
  spriteUrl: string;
  class: string;
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

type RarityRank = {
  [key: string]: number;
}

export const RarityRanking: RarityRank = {
  "legendary": 4,
  "epic": 3,
  "rare": 2,
  "common": 1,
}

export const GACHA_RATES: GACHA_RATES_TYPE = {
  "legendary": 0.02,
  "epic": 0.20,
  "rare": 0.40,
  "common": 0.38,
}

export const PITY = {
  soft: 100,
  hard: 180,
}

export type ALL_UNITS_TYPE = {
  [key: string]: object[];
}

export const RAINBOW_BANNER_IMAGE = "https://soc.clouddrop.wiki/static/media/recruit_stage_Legendary.71019f09a67e5a45dc0f.png";

export const FEATURED_UNITS = [
  {
    name: "Gloria",
    bannerType: "debut",
    imageUrl: "test", 
    spriteUrl: "test",
    class: "watcher"
  },
  {
    name: "Col & Beryl",
    bannerType: "destined", 
    imageUrl: "test", 
    spriteUrl: "test",
  },
  {
    name: "Samantha & Dantalion",
    bannerType: "destined", 
    imageUrl: "test", 
    spriteUrl: "test",
  },
  {
    name: "Nungal & Garcia",
    bannerType: "destined", 
    imageUrl: "test", 
    spriteUrl: "test",
  },
  {
    name: "Edda",
    bannerType: "debut", 
    imageUrl: "test", 
    spriteUrl: "test",
    class: "watcher"
  },
  {
    name: "LilyWill & Alexei",
    bannerType: "destined", 
    imageUrl: "test", 
    spriteUrl: "test",
  },
  {
    name: "Simona",
    bannerType: "debut", 
    imageUrl: "test", 
    spriteUrl: "test",
    class: "watcher"
  },
  {
    name: "NonoWill & Momo",
    bannerType: "destined", 
    imageUrl: "test", 
    spriteUrl: "test",
  },
  {
    name: "Cocoa",
    bannerType: "debut", 
    imageUrl: "test", 
    spriteUrl: "test",
    class: "defender"
  },
  {
    name: "Acambe",
    bannerType: "debut",
    imageUrl: "test",
    spriteUrl: "test",
    class: "destroyer"
  },
  {
    name: "Safiyyah",
    bannerType: "debut", 
    imageUrl: "test", 
    spriteUrl: "test",
    class: "seeker"
  },
  {
    name: "Auguste",
    bannerType: "debut", 
    imageUrl: "test", 
    spriteUrl: "test",
    class: "breaker"
  },
];

export const RAINBOW_BANNER_BACKGROUND = "https://soc.clouddrop.wiki/static/media/recruit_bg_Legendary.90e4064fc2b2ed4e70a7.png";
export const WATCHER_SYMBOL = "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/roles%2FWatcher.png?alt=media";

export const ALL_STANDARD_UNITS: ALL_UNITS_TYPE = {
  "legendary": [
    { name: "Nungal", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fnungal_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fnungal.gif?alt=media", class: "destroyer" },
    { name: "Nergel", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "defender" },
    { name: "Leonide", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "breaker" },
    { name: "Iggy", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "breaker" },
    { name: "Magnus", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "defender" },
    { name: "Garcia", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "seeker" },
    { name: "Momo", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "destroyer" },
    { name: "Inanna", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "watcher" },
    { name: "Col", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fcol_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fcol.gif?alt=media", class: "seeker" },
    { name: "Alexei", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "defender" },
    { name: "Faycal", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "watcher" },
    { name: "LilyWill", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "watcher" },
    { name: "Teadon", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "defender" },
    { name: "Guzman", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "destroyer" },
    { name: "NonoWill", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "seeker" },
    { name: "Dantalion", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "destroyer" },
    { name: "Rawiyah", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "breaker" },
    { name: "Xavier", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "breaker" },
    { name: "Maitha", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "defender" },
    { name: "Beryl", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "destroyer" },
    { name: "Samantha", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "watcher" },
    { name: "Miguel", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "watcher" },
  ],
  "epic": [
    { name: "Nightraven", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "destroyer" },
    { name: "Lightning", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "seeker" },
    { name: "Blade", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "seeker" },
    { name: "Lash", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "destroyer" },
    { name: "Flare", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "watcher" },
    { name: "Ballista", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "watcher" },
    { name: "Agile Eye", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "watcher" },
    { name: "Might", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "breaker" },
    { name: "Divine Grace", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "watcher" },
    { name: "Abyss", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "destroyer" },
    { name: "Enforcer", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "destroyer" },
    { name: "Stinger", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "seeker" },
    { name: "Stormbreaker", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "breaker" },
    { name: "Flame Sorceress", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "destroyer" },
    { name: "Supression", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "defender" },
    { name: "Nightingale", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "watcher" },
    { name: "Crimson Falcon", rarity: "epic", imageUrl: "test", spriteUrl: "test" , class: "seeker" },
    { name: "Angel", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "watcher" },
    { name: "Tempest", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "breaker" },
    { name: "Candlelight", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "watcher" },
    { name: "Butterfly", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "watcher" },
  ],
  "rare": [
    { name: "Papal Guard", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "defender" },
    { name: "Papal Spearman", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "breaker" },
    { name: "Knighted Guard", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "defender"},
    { name: "Knighted Spearman", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "breaker" },
    { name: "KA Archer", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "watcher" },
    { name: "KA Sorceress", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "destroyer"},
    { name: "Darklight Ice Priest", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "destroyer"},
    { name: "Papal Ice Priest", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "watcher"},
    { name: "Darklight Pyromancer", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "destroyer"},
    { name: "KA Spearman", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "breaker"},
    { name: "KA Guard", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "defender"},
    { name: "KA Healer", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "watcher"},
    { name: "Vlderian Scout", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "seeker"},
  ],
  "common": [
    { name: "Outlaw Spearman", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "breaker"},
    { name: "Outlaw Assassin", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "seeker"},
    { name: "Outlaw Archer", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "watcher"},
    { name: "Outlaw Crossbowman", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "watcher"},
    { name: "Outlaw Guard", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "defender"},
    { name: "Recruited Assassin", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "seeker"},
    { name: "Recruited Guard", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "defender"},
    { name: "Recruited Archer", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "watcher"},
    { name: "Outlaw Axeman", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "breaker"},
    { name: "Recruited Spearman", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "breaker"},
  ]
}