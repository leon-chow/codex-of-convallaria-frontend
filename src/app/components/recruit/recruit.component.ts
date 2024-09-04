import { Component } from '@angular/core';
import { ALL_UNITS, FEATURED_UNITS, GACHA_RATES, IUnit, UNIT_RARITY } from '../../utils/constants';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-recruit',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './recruit.component.html',
  styleUrl: './recruit.component.css'
})
export class RecruitComponent {

  totalHopeLuxiteSpent: number = 0;
  totalUnits: IUnit[] = [];
  currentInstanceUnits: IUnit[] = [];
  softPity: number = 100;
  hardPity: number = 180;
  selectedBanner: string = "";
  unitPool: IUnit[] = [];
  banners: string[] = [];

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
    const charactersOfRarity = ALL_UNITS[rarity] as IUnit[];
    let randomIndex = Math.floor(Math.random() * charactersOfRarity.length);
    if (this.selectedBanner && rarity === UNIT_RARITY.legendary) {
      const fiftyFifty = Math.floor(Math.random() * 100) + 1;
      const targetedUnitIndex = charactersOfRarity.findIndex(character => {
        return character.name.toLowerCase() === this.selectedBanner.toLowerCase();
      });
      if (fiftyFifty > 50) {
        this.softPity = 100;
        this.hardPity = 180;
        return charactersOfRarity[targetedUnitIndex]; 
      } else {
        this.softPity = 100;
        this.hardPity--;
        while (true) {
          if (targetedUnitIndex !== randomIndex) {
            return charactersOfRarity[randomIndex]
          } else {
            randomIndex = Math.floor(Math.random() * charactersOfRarity.length);
          }
        }
      }
    }
    this.softPity--;
    this.hardPity--;
    return charactersOfRarity[randomIndex];
  }

  // TODO: pick featured units 
  selectBanner(banner: string) {
    console.log(`selecting ${banner}`);
    this.selectedBanner = banner;
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
      this.currentInstanceUnits.push(character as IUnit);
    }
  }
}
