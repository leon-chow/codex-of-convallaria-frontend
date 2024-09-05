import { Component } from '@angular/core';
import { ALL_STANDARD_UNITS, FEATURED_UNITS, GACHA_RATES, IUnit, UNIT_RARITY } from '../../utils/constants';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import * as _ from "lodash";

@Component({
  selector: 'app-recruit',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatInputModule, MatFormFieldModule, FormsModule, MatButton],
  templateUrl: './recruit.component.html',
  styleUrl: './recruit.component.css'
})
export class RecruitComponent {

  totalHopeLuxiteSpent: number = 0;
  currentInstanceUnits: IUnit[] = [];
  softPity: number = 100;
  hardPity: number = 180;
  selectedBanner: string = "Default";
  collectedUnits: IUnit[] = [];
  banners: string[] = [];
  bannerUnitPool = _.cloneDeep(ALL_STANDARD_UNITS);

  ngOnInit() {
    FEATURED_UNITS.forEach(unit => {
      this.banners.push(unit.name)
    });
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
    return undefined;
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
    if (this.selectedBanner === "Default") {
      this.softPity = 100;
      return legendaryCharacters[randomNumber];
    }

    // targeted banner
    const fiftyFifty = Math.floor(Math.random() * 100) + 1;
    const targetedUnitIndex = legendaryCharacters.findIndex(character => {
      return character.name.toLowerCase() === this.selectedBanner.toLowerCase();
    });

    if (fiftyFifty > 50) {
      this.softPity = 100;
      this.hardPity = 180;
      return legendaryCharacters[targetedUnitIndex]; 
    } else {
      this.softPity = 100;
      this.hardPity--;
      while (true) {
        if (targetedUnitIndex !== randomNumber) {
          return legendaryCharacters[randomNumber]
        } else {
          randomNumber = Math.floor(Math.random() * legendaryCharacters.length);
        }
      }
    }
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
  }

  selectBanner() {
    if (this.selectedBanner === "Default") {
      return;
    }
    console.log(this.selectedBanner);
    this.resetSimulator();
    for (const unit of FEATURED_UNITS) {
      this.bannerUnitPool["legendary"].push({
        name: unit.name,
        rarity: "legendary",
        imageUrl: "test",
        spriteUrl: "test"
      });
      if (unit.name === this.selectedBanner) {
        break;
      }
    }
  }

  resetSimulator() {
    this.hardPity = 180;
    this.softPity = 100;
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
      this.totalHopeLuxiteSpent += 150;
      const rarity = this.getRandomRarity();
      const character = this.getRandomCharacter(rarity!);
      console.log(character.name, rarity);
      this.currentInstanceUnits.push(character as IUnit);
      this.populateCollectedUnits(character);
    }
  }
}
