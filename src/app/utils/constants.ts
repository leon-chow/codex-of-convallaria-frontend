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
    imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/8/87/r17kq2hdy7b8ngc2nbvv8x75avkdjd0.png/800px-%E7%AB%8B%E7%BB%98_%E9%98%BF%E5%9D%8E%E8%B4%9D.png",
    spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/3/3a/6vojf1gl9gt9abd0oan74tod9si69vi.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E9%98%BF%E5%9D%8E%E8%B4%9D.png",
    class: "destroyer"
  },
  {
    name: "Safiyyah",
    bannerType: "debut", 
    imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/1/19/qrwabia53g6jvbdzwy6hrz4ins3eop7.png/800px-%E7%AB%8B%E7%BB%98_%E7%B4%A2%E8%8F%B2%E4%BA%9A.png", 
    spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/b/be/q3wm0wduu73rmrf4vxmyhj532a7ddaj.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E7%B4%A2%E8%8F%B2%E4%BA%9A.png",
    class: "seeker"
  },
  {
    name: "Auguste",
    bannerType: "debut", 
    imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/3/37/7pwl02ecakjr040atmvnowhlpgj3gir.png/800px-%E7%AB%8B%E7%BB%98_%E5%A5%A5%E5%8F%A4%E6%96%AF%E7%89%B9.png", 
    spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/4/44/ezqu5j5zvw2p0vthzr51lwqbvqipji3.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E5%A5%A5%E5%8F%A4%E6%96%AF%E7%89%B9.png",
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
    { name: "Leonide", rarity: "legendary", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/0/08/mkz1185bp2o0jzfs9achdh11y5amovz.png/800px-%E7%AB%8B%E7%BB%98_%E5%88%97%E5%A5%A5%E5%B0%BC%E5%BE%B7.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/f/fb/l22s1tdrdm1ls0725whqstozswvx3ve.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E4%BC%8A%E5%A5%87.png", class: "breaker" },
    { name: "Iggy", rarity: "legendary", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/c/c5/gcp25l36znq69u380plcf85lyq27589.png/800px-%E7%AB%8B%E7%BB%98_%E4%BC%8A%E5%A5%87.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/9/9b/bi1ke6cew5y3hq9k3buvizvkqtqaaz4.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E5%88%97%E5%A5%A5%E5%B0%BC%E5%BE%B7.png", class: "breaker" },
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
    { name: "Candlelight", rarity: "epic", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/2/25/r06f7f9pimoyhsmynnw8buvq2tgwtn6.png/800px-%E7%AB%8B%E7%BB%98_%E5%80%92%E5%90%8A%E4%BA%BA%E2%80%9C%E7%83%9B%E7%81%AB%E2%80%9D.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/a/a9/0a3qha1wcxqr154bokdt4mpr40pii72.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E5%80%92%E5%90%8A%E4%BA%BA%E2%80%9C%E7%83%9B%E7%81%AB%E2%80%9D.png", class: "watcher" },
    { name: "Butterfly", rarity: "epic", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fbutterfly_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fbutterfly.gif?alt=media", class: "watcher" },
  ],
  "rare": [
    { name: "Papal Guard", rarity: "rare", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/0/08/m9bmn62ezoibolyrj66irtjljyudwk0.png/800px-%E7%AB%8B%E7%BB%98_%E6%B3%95%E7%9A%87%E5%9B%BD%E5%89%91%E7%9B%BE%E5%85%B5.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/3/38/alae4niisps7icp9r3fz934apcjs81j.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E6%B3%95%E7%9A%87%E5%9B%BD%E5%89%91%E7%9B%BE%E5%85%B5.png", class: "defender" },
    { name: "Papal Spearman", rarity: "rare", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/1/1f/rgjub5rztsa0of1xqipj8qtxwmo7cgp.png/800px-%E7%AB%8B%E7%BB%98_%E6%B3%95%E7%9A%87%E5%9B%BD%E6%8A%95%E6%9E%AA%E5%85%B5.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/0/0d/1b1mnf0g46hpqkmb70s576elk2zdjta.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E6%B3%95%E7%9A%87%E5%9B%BD%E6%8A%95%E6%9E%AA%E5%85%B5.png", class: "breaker" },
    { name: "Knighted Guard", rarity: "rare", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/d/d9/fkor8lyp8vdzp24nagykikzkv1yn8jt.png/800px-%E7%AB%8B%E7%BB%98_%E9%AA%91%E5%A3%AB%E5%90%8C%E7%9B%9F%E5%89%91%E7%9B%BE%E9%AA%91%E5%A3%AB.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/3/37/chcb43a47gg1rdj5zd7cs9sshlf3tfn.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E9%AA%91%E5%A3%AB%E5%90%8C%E7%9B%9F%E5%89%91%E7%9B%BE%E9%AA%91%E5%A3%AB.png", class: "defender"},
    { name: "Knighted Spearman", rarity: "rare", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/9/96/guvnx4nlficrn1jq7sqd2s8urtc5p41.png/800px-%E7%AB%8B%E7%BB%98_%E9%AA%91%E5%A3%AB%E5%90%8C%E7%9B%9F%E9%95%BF%E6%9E%AA%E5%85%B5.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/7/7f/3kwc9hozi3yfx0g70rae9buzg9t2sth.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E9%AA%91%E5%A3%AB%E5%90%8C%E7%9B%9F%E9%95%BF%E6%9E%AA%E5%85%B5.png", class: "breaker" },
    { name: "KA Archer", rarity: "rare", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/8/8f/dlbhq1vcs8rhdvhxcpn7eu5ocywvo6u.png/800px-%E7%AB%8B%E7%BB%98_%E7%8E%8B%E5%9B%BD%E5%86%9B%E5%BC%93%E7%AE%AD%E6%89%8B.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/3/36/mp7dcoc51sd7vld68rn7g4k4dflltd0.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E7%8E%8B%E5%9B%BD%E5%86%9B%E5%BC%93%E7%AE%AD%E6%89%8B.png", class: "watcher" },
    { name: "KA Fire Conjurer", rarity: "rare", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fk-a-fire-conjurer_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fk-a-fire-conjurer.gif?alt=media", class: "destroyer"},
    { name: "Darklight Ice Priest", rarity: "rare", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/8/84/i5r6x7ciqhppx05myqxk1ded0f7z9x3.png/800px-%E7%AB%8B%E7%BB%98_%E9%BB%91%E6%9A%97%E4%B9%8B%E5%85%89%E5%86%B0%E6%9C%AF%E5%B8%88.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/7/70/8az05v4msisnvpkpkt9wdwphi203xzo.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E9%BB%91%E6%9A%97%E4%B9%8B%E5%85%89%E5%86%B0%E6%9C%AF%E5%B8%88.png", class: "destroyer"},
    { name: "Papal Ice Priest", rarity: "rare", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fpapal-ice-priest_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Fpapal-ice-priest.gif?alt=media", class: "watcher"},
    { name: "Darklight Pyromancer", rarity: "rare", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/3/3d/3fkzindmjspjch6mfgrywnxxkd0df4k.png/800px-%E7%AB%8B%E7%BB%98_%E9%BB%91%E6%9A%97%E4%B9%8B%E5%85%89%E7%81%AB%E6%9C%AF%E5%B8%88.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/8/84/alek06ih85f8qi97a1uz6h1iv8wu40d.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E9%BB%91%E6%9A%97%E4%B9%8B%E5%85%89%E7%81%AB%E6%9C%AF%E5%B8%88.png", class: "destroyer"},
    { name: "KA Spearman", rarity: "rare", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/9/9f/0yu8enqlgo85allvxfkxiq16q9bo9p5.png/800px-%E7%AB%8B%E7%BB%98_%E7%8E%8B%E5%9B%BD%E5%86%9B%E9%95%BF%E6%9E%AA%E5%85%B5.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/c/c9/9ish8req10d5xndeotm0zl2kk9em9er.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E7%8E%8B%E5%9B%BD%E5%86%9B%E9%95%BF%E6%9E%AA%E5%85%B5.png", class: "breaker"},
    { name: "KA Guard", rarity: "rare", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/1/19/0z2ky5j23lpbrf9f7zr62uf83r2cgi9.png/800px-%E7%AB%8B%E7%BB%98_%E7%8E%8B%E5%9B%BD%E5%86%9B%E5%89%91%E7%9B%BE%E5%85%B5.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/8/8d/lj7vu0mqmjyiol4gzs7hmns2mpwm7lk.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E7%8E%8B%E5%9B%BD%E5%86%9B%E5%89%91%E7%9B%BE%E5%85%B5.png", class: "defender"},
    { name: "KA Light Conjurer", rarity: "rare", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/f/fb/ttq16kkza8ouf6ay6lun787x9cowqmo.png/800px-%E7%AB%8B%E7%BB%98_%E7%8E%8B%E5%9B%BD%E5%86%9B%E5%85%89%E6%9C%AF%E5%B8%88.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/b/b4/j5qojtvnxrx87ashrr3wzslfv57elwx.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E7%8E%8B%E5%9B%BD%E5%86%9B%E5%85%89%E6%9C%AF%E5%B8%88.png", class: "watcher"},
    { name: "Vlderian Scout", rarity: "rare", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/3/35/43ugl8g7yz2h8ascobu5ykj4q4sd1b0.png/800px-%E7%AB%8B%E7%BB%98_%E8%96%87%E5%B0%94%E5%BE%B7%E6%96%A5%E5%80%99.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/6/60/o2k8v2skwgf7cxvagphtejjboxp1f5r.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E8%96%87%E5%B0%94%E5%BE%B7%E6%96%A5%E5%80%99.png", class: "seeker"},
  ],
  "common": [
    { name: "Outlaw Spearman", rarity: "common", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/7/73/cz7ti7x6c1p9mqaodhcds56t4twy1sb.png/800px-%E7%AB%8B%E7%BB%98_%E6%97%A0%E6%B3%95%E8%80%85%E9%95%BF%E6%9E%AA%E5%85%B5.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/f/f6/osja7xmjcdb9hhwgyz0xhpa4obzh693.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E6%97%A0%E6%B3%95%E8%80%85%E9%95%BF%E6%9E%AA%E5%85%B5.png", class: "breaker"},
    { name: "Outlaw Assassin", rarity: "common", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Foutlaw-assassin_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Foutlaw-assassin.gif?alt=media", class: "seeker"},
    { name: "Outlaw Archer", rarity: "common", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Foutlaw-archer_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Foutlaw-archer.gif?alt=media", class: "watcher"},
    { name: "Outlaw Crossbowman", rarity: "common", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/4/4e/32hi9houbq1og384i3rz6r4oytzj4g1.png/800px-%E7%AB%8B%E7%BB%98_%E6%97%A0%E6%B3%95%E8%80%85%E5%BC%A9%E5%85%B5.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/5/5b/ojkorv2yp1hgr4h1asqep9qu8qnxdlc.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E6%97%A0%E6%B3%95%E8%80%85%E5%BC%A9%E5%85%B5.png", class: "watcher"},
    { name: "Outlaw Guard", rarity: "common", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Foutlaw-guard_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Foutlaw-guard.gif?alt=media", class: "defender"},
    { name: "Recruited Assassin", rarity: "common", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Frecruited-assassin_profile.png?alt=media", spriteUrl: "https://firebasestorage.googleapis.com/v0/b/cdwiki-73e46.appspot.com/o/chars%2Frecruited-assassin.gif?alt=media", class: "seeker"},
    { name: "Recruited Guard", rarity: "common", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/5/5f/ks4y1fbnh28vy0w1v66pechdtljo2qu.png/800px-%E7%AB%8B%E7%BB%98_%E9%9B%87%E4%BD%A3%E5%89%91%E7%9B%BE%E5%85%B5.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/f/f2/h4lpk9ww7zrbpii9a7h9cus9jhut5es.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E9%9B%87%E4%BD%A3%E5%89%91%E7%9B%BE%E5%85%B5.png", class: "defender"},
    { name: "Recruited Archer", rarity: "common", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/e/e3/bt6ggerlr1jlzqwpxh21mwx9r1naddr.png/800px-%E7%AB%8B%E7%BB%98_%E9%9B%87%E4%BD%A3%E5%BC%93%E6%89%8B.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/c/c4/ieyp3qcglwchjvz2sd4tp73kj57csx8.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E9%9B%87%E4%BD%A3%E5%BC%93%E6%89%8B.png", class: "watcher"},
    { name: "Outlaw Axeman", rarity: "common", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/1/1f/rahsfqom8ipzof58uw1d01thlrkut1w.png/800px-%E7%AB%8B%E7%BB%98_%E6%97%A0%E6%B3%95%E8%80%85%E5%B7%A8%E6%96%A7%E5%85%B5.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/d/d0/pkdc6pqs4d0qqx6wrabhfs9qiuun5dd.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E6%97%A0%E6%B3%95%E8%80%85%E5%B7%A8%E6%96%A7%E5%85%B5.png", class: "breaker"},
    { name: "Recruited Spearman", rarity: "common", imageUrl: "https://patchwiki.biligame.com/images/llzj/thumb/f/f7/nmtjkoc095p7vqfhpaj34uz20zmovyj.png/800px-%E7%AB%8B%E7%BB%98_%E9%9B%87%E4%BD%A3%E9%95%BF%E6%9E%AA%E5%85%B5.png", spriteUrl: "https://patchwiki.biligame.com/images/llzj/thumb/f/f5/274l01h23k1ip1lu4rhiykhb4xwlikm.png/84px-%E5%83%8F%E7%B4%A0%E4%BA%BA%E7%89%A9_%E9%9B%87%E4%BD%A3%E9%95%BF%E6%9E%AA%E5%85%B5.png", class: "breaker"},
  ]
}