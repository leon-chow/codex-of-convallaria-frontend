import { Component } from '@angular/core';
import { ALL_UNITS, GACHA_RATES, IUnit } from '../../utils/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recruit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recruit.component.html',
  styleUrl: './recruit.component.css'
})
export class RecruitComponent {

  totalHopeLuxiteSpent: number = 0;
  totalUnits: IUnit[] = [];
  currentInstanceUnits: IUnit[] = [];

  getRandomRarity() {
    const randomValue = Math.random();
    let cumulativeProbability = 0;

    for (const rarity in GACHA_RATES) {
      console.log(rarity, randomValue);
      cumulativeProbability += GACHA_RATES[rarity];
      if (randomValue < cumulativeProbability) {
        return rarity;
      }
    }
    return undefined;
  }

  getRandomCharacter(rarity: string) {
    const charactersOfRarity = ALL_UNITS[rarity];
    return charactersOfRarity[Math.floor(Math.random() * charactersOfRarity.length)];
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
