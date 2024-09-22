import { Component } from '@angular/core';
import { ALL_STANDARD_UNITS, RarityRanking, FEATURED_UNITS, GACHA_RATES, GACHA_RATES_TYPE, IUnit, PITY, UNIT_RARITY, ALL_UNITS_TYPE } from '../../utils/constants';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import * as _ from "lodash";
import { RecruitCardComponent } from '../recruit-card/recruit-card.component';

@Component({
  selector: 'app-recruit',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatInputModule, MatFormFieldModule, FormsModule, MatButton, RecruitCardComponent],
  templateUrl: './recruit.component.html',
  styleUrl: './recruit.component.css'
})
export class RecruitComponent {
  totalHopeLuxiteSpent: number = 0;
  currentInstanceUnits: IUnit[] = [];
  softPity: number = PITY.soft;
  hardPity: number = PITY.hard;
  selectedBanner: string = "Default";
  destinedBannerLabel: string = "";
  collectedUnits: IUnit[] = [];
  banners: string[] = [];
  legendaryCounter: number = 0;
  totalSummonsCounter: number = 0;
  bannerUnitPool: ALL_UNITS_TYPE = _.cloneDeep(ALL_STANDARD_UNITS);

  ngOnInit() {
    FEATURED_UNITS.forEach(unit => {
      this.banners.push(unit.name)
    });
  }

  getFormattedNumber(num: number) {
    return num.toLocaleString('en-US');
  }

  getRandomRarity() {
    const randomValue = Math.random();
    let cumulativeProbability = 0;

    for (const rarity in GACHA_RATES) {
      if (this.softPity === 1 || this.hardPity === 1) {
        return UNIT_RARITY.legendary;
      }
      cumulativeProbability += GACHA_RATES[rarity];
      if (randomValue < cumulativeProbability) {
        return rarity;
      }
    }
    return UNIT_RARITY.common;
  }

  getRandomCharacter(rarity: string) {
    const charactersOfRarity = this.bannerUnitPool[rarity] as IUnit[];
    let randomIndex = Math.floor(Math.random() * charactersOfRarity.length);

    if (rarity === UNIT_RARITY.legendary) {
      return this.handleLegendaryUnit(charactersOfRarity, randomIndex);
    }

    if (this.selectedBanner !== "Default") {
      this.hardPity--;
    }

    this.softPity--;
    return charactersOfRarity[randomIndex];
  }

  handleLegendaryUnit(legendaryCharacters: IUnit[], randomNumber: number) {
    // non targeted banner
    this.legendaryCounter++;
    if (this.selectedBanner === "Default") {
      this.softPity = PITY.soft;
      return legendaryCharacters[randomNumber];
    }

    const targetedUnitIndex = !this.selectedBanner.includes("&") ? legendaryCharacters.findIndex(character => {
      return character.name.toLowerCase() === this.selectedBanner.toLowerCase();
    }) : this.handleDestinedBanner(legendaryCharacters);
    
    // hit hard pity
    if (this.hardPity === 1) {
      this.hardPity = 180;
      if (this.selectedBanner.includes("&")) {
        return legendaryCharacters[targetedUnitIndex!];
      }
      return legendaryCharacters[targetedUnitIndex!];
    }
    
    // targeted banner
    const fiftyFifty = Math.floor(Math.random() * 100) + 1;

    if (fiftyFifty > 50) {
      this.softPity = PITY.soft;
      this.hardPity = PITY.hard;
      return legendaryCharacters[targetedUnitIndex!]; 
    } else {
      this.softPity = PITY.soft;
      this.hardPity--;
      while (true) {
        if (this.selectedBanner.includes("&")) {
          const doubleBannerRegex = /\s*&\s*/;
          const result = this.selectedBanner.split(doubleBannerRegex);
          if (legendaryCharacters[randomNumber].name !== result[0] && legendaryCharacters[randomNumber!].name !== result[1]) {
            return legendaryCharacters[randomNumber];
          } 
        } else {
          if (targetedUnitIndex !== randomNumber) {
            return legendaryCharacters[randomNumber]
          } 
        }
        randomNumber = Math.floor(Math.random() * legendaryCharacters.length);
      }
    }
  }

  handleDestinedBanner(legendaryCharacters: IUnit[]) {
    // Gets names separated by &, i.e Col & Beryl
    const doubleBannerRegex = /\s*&\s*/;
    const result = this.selectedBanner.split(doubleBannerRegex);
    if (result) {
      const randomIndex = Math.floor(Math.random() * result.length);
      const selectedCharacter = result[randomIndex];
  
      return legendaryCharacters.findIndex(character => {
        return character.name.toLowerCase() === selectedCharacter.toLowerCase();
      });
    }
    return null;
  }
  
  sortCollectedUnits() {
    this.collectedUnits.sort((a: IUnit, b: IUnit) => {
      if (a.name === this.selectedBanner && b.name !== this.selectedBanner) {
        return -1;
      } 
      if (b.name === this.selectedBanner && a.name !== this.selectedBanner) {
        return 1;
      }
      const rarityComparison = RarityRanking[b.rarity] - RarityRanking[a.rarity];

      if (rarityComparison === 0) {
        return a.name.localeCompare(b.name);
      }

      return rarityComparison;
    })
  }

  populateCollectedUnits(character: IUnit) {
    if (character.rarity === UNIT_RARITY.epic || character.rarity === UNIT_RARITY.legendary) {
      const index = this.collectedUnits.findIndex(c => c.name === character.name) 
      if (index !== -1) {
        this.collectedUnits[index].count! += 1;
      } else {
        this.collectedUnits.push({...character, count: 1});
      }
    }
    this.sortCollectedUnits();
  }

  selectBanner() {
    if (this.selectedBanner === "Default") {
      return;
    }
    this.resetSimulator();
    for (const unit of FEATURED_UNITS) {
      if (unit.bannerType.toLowerCase() === "debut") {
        this.bannerUnitPool["legendary"].push({
          name: unit.name,
          rarity: "legendary",
          imageUrl: unit.imageUrl,
          spriteUrl: unit.spriteUrl,
          class: unit.class
        });
      }
      if (unit.name === this.selectedBanner) {
        break;
      }
    }
    if (this.selectedBanner.includes("&")) {
      this.destinedBannerLabel = this.selectedBanner.replace("&", "or");
    }
  }

  resetSimulator() {
    this.hardPity = PITY.hard;
    this.softPity = PITY.soft;
    this.collectedUnits = [];
    this.currentInstanceUnits = [];
    this.totalHopeLuxiteSpent = 0;
    this.bannerUnitPool = _.cloneDeep(ALL_STANDARD_UNITS);
  }

  performSummon(isMulti: boolean) {
    let loops = 1;
    this.currentInstanceUnits = [];
    if (isMulti) {
      loops = 10;
    }
    for (let i = 0; i < loops; i++) {
      this.totalSummonsCounter++;
      this.totalHopeLuxiteSpent += 150;
      const rarity = this.getRandomRarity();
      const character = this.getRandomCharacter(rarity);
      this.currentInstanceUnits.push(character as IUnit);
      this.populateCollectedUnits(character);
    }
  }
}
