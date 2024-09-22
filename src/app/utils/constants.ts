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
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fgloria_profile.png?alt=media", 
    spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fgloria.gif?alt=media",
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
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fedda_profile.png?alt=media", 
    spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fedda.gif?alt=media",
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
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fsimona_profile.png?alt=media", 
    spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fsimona.gif?alt=media",
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
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fcocoa_profile.png?alt=media", 
    spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fcocoa.gif?alt=media",
    class: "defender"
  },
  {
    name: "Inanna & Xavier",
    bannerType: "destined", 
    imageUrl: "test",
    spriteUrl: "test",
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
export const DESTROYER_SYMBOL = "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/roles%2FDestroyer.png?alt=media";
export const BREAKER_SYMBOL = "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/roles%2FBreaker.png?alt=media";
export const DEFENDER_SYMBOL = "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/roles%2FDefender.png?alt=media";
export const SEEKER_SYMBOL = "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/roles%2FSeeker.png?alt=media";

export const ALL_STANDARD_UNITS: ALL_UNITS_TYPE = {
  "legendary": [
    { name: "Nungal", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fnungal_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fnungal.gif?alt=media", class: "destroyer" },
    { name: "Nergel", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fnergal_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fnergal.gif?alt=media", class: "defender" },
    { name: "Leonide", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "breaker" },
    { name: "Iggy", rarity: "legendary", imageUrl: "test", spriteUrl: "test", class: "breaker" },
    { name: "Magnus", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fmagnus_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fmagnus.gif?alt=media", class: "defender" },
    { name: "Garcia", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fgarcia_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fgarcia.gif?alt=media", class: "seeker" },
    { name: "Momo", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fmomo_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fmomo.gif?alt=media", class: "destroyer" },
    { name: "Inanna", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Flilywill_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Flilywill.gif?alt=media", class: "watcher" },
    { name: "Col", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fcol_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fcol.gif?alt=media", class: "seeker" },
    { name: "Alexei", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Falexei_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Falexei.gif?alt=media", class: "defender" },
    { name: "Faycal", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Ffaycal_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Ffaycal.gif?alt=media", class: "watcher" },
    { name: "LilyWill", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Flilywill_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Flilywill.gif?alt=media", class: "watcher" },
    { name: "Teadon", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fteadon_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fteadon.gif?alt=media", class: "defender" },
    { name: "Guzman", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fguzman_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fguzman.gif?alt=media", class: "destroyer" },
    { name: "NonoWill", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fnonowill_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fnonowill.gif?alt=media", class: "seeker" },
    { name: "Dantalion", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fdantalion_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fdantalion.gif?alt=media", class: "destroyer" },
    { name: "Rawiyah", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Frawiyah_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Frawiyah.gif?alt=media", class: "breaker" },
    { name: "Xavier", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fxavier_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fxavier.gif?alt=media", class: "breaker" },
    { name: "Maitha", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fmaitha_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fmaitha.gif?alt=media", class: "defender" },
    { name: "Beryl", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fberyl_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fberyl.gif?alt=media", class: "destroyer" },
    { name: "Samantha", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fsamantha_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fsamantha.gif?alt=media", class: "watcher" },
    { name: "Miguel", rarity: "legendary", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fmiguel_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fmiguel.gif?alt=media", class: "watcher" },
  ],
  "epic": [
    { name: "Nightraven", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fnight-raven_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fnight-raven.gif?alt=media", class: "destroyer" },
    { name: "Lightning", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Flightning_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Flightning.gif?alt=media", class: "seeker" },
    { name: "Blade", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fblade_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fblade.gif?alt=media", class: "seeker" },
    { name: "Lash", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Flash_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Flash.gif?alt=media", class: "destroyer" },
    { name: "Flare", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fflare_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fflare.gif?alt=media", class: "watcher" },
    { name: "Ballista", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fballista_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fballista.gif?alt=media", class: "watcher" },
    { name: "Agile Eye", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fagile-eye_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fagile-eye.gif?alt=media", class: "watcher" },
    { name: "Might", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fmight_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fmight.gif?alt=media", class: "breaker" },
    { name: "Divine Grace", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fdivine-grace_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fdivine-grace.gif?alt=media", class: "watcher" },
    { name: "Abyss", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fabyss_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fabyss.gif?alt=media", class: "destroyer" },
    { name: "Enforcer", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fenforcer_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fenforcer.gif?alt=media", class: "destroyer" },
    { name: "Stinger", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fstinger_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fstinger.gif?alt=media", class: "seeker" },
    { name: "Stormbreaker", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fstormbreaker_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fstormbreaker.gif?alt=media", class: "breaker" },
    { name: "Flame Sorceress", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fflame-sorceress_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fflame-sorceress.gif?alt=media", class: "destroyer" },
    { name: "Supression", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fsuppression_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fsuppression.gif?alt=media", class: "defender" },
    { name: "Nightingale", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fnightingale_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fnightingale.gif?alt=media", class: "watcher" },
    { name: "Crimson Falcon", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fcrimson-falcon_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fcrimson-falcon.gif?alt=media" , class: "seeker" },
    { name: "Angel", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fangel_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fangel.gif?alt=media", class: "watcher" },
    { name: "Tempest", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Ftempest_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Ftempest.gif?alt=media", class: "breaker" },
    { name: "Candlelight", rarity: "epic", imageUrl: "test", spriteUrl: "test", class: "watcher" },
    { name: "Butterfly", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fbutterfly_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fbutterfly.gif?alt=media", class: "watcher" },
  ],
  "rare": [
    { name: "Papal Guard", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "defender" },
    { name: "Papal Spearman", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "breaker" },
    { name: "Knighted Guard", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "defender"},
    { name: "Knighted Spearman", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "breaker" },
    { name: "KA Archer", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "watcher" },
    { name: "KA Fire Conjurer", rarity: "rare", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fk-a-fire-conjurer_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fk-a-fire-conjurer.gif?alt=media", class: "destroyer"},
    { name: "Darklight Ice Priest", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "destroyer"},
    { name: "Papal Ice Priest", rarity: "rare", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fpapal-ice-priest_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fpapal-ice-priest.gif?alt=media", class: "watcher"},
    { name: "Darklight Pyromancer", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "destroyer"},
    { name: "KA Spearman", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "breaker"},
    { name: "KA Guard", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "defender"},
    { name: "KA Healer", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "watcher"},
    { name: "Vlderian Scout", rarity: "rare", imageUrl: "test", spriteUrl: "test", class: "seeker"},
  ],
  "common": [
    { name: "Outlaw Spearman", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "breaker"},
    { name: "Outlaw Assassin", rarity: "common", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Foutlaw-assassin_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Foutlaw-assassin.gif?alt=media", class: "seeker"},
    { name: "Outlaw Archer", rarity: "common", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Foutlaw-archer_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Foutlaw-archer.gif?alt=media", class: "watcher"},
    { name: "Outlaw Crossbowman", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "watcher"},
    { name: "Outlaw Guard", rarity: "common", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Foutlaw-guard_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Foutlaw-guard.gif?alt=media", class: "defender"},
    { name: "Recruited Assassin", rarity: "common", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Frecruited-assassin_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Frecruited-assassin.gif?alt=media", class: "seeker"},
    { name: "Recruited Guard", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "defender"},
    { name: "Recruited Archer", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "watcher"},
    { name: "Outlaw Axeman", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "breaker"},
    { name: "Recruited Spearman", rarity: "common", imageUrl: "test", spriteUrl: "test", class: "breaker"},
  ]
}