import { Component, Input } from '@angular/core';
import { BREAKER_SYMBOL, DEFENDER_SYMBOL, DESTROYER_SYMBOL, RAINBOW_BANNER_BACKGROUND, RAINBOW_BANNER_IMAGE, SEEKER_SYMBOL, WATCHER_SYMBOL } from '../../utils/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recruit-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recruit-card.component.html',
  styleUrl: './recruit-card.component.css'
})
export class RecruitCardComponent {
  rainbowBannerImage = RAINBOW_BANNER_IMAGE;
  rainbowBannerBackground = RAINBOW_BANNER_BACKGROUND;
  watcherSymbol = WATCHER_SYMBOL;
  destroyerSymbol = DESTROYER_SYMBOL;
  breakerSymbol = BREAKER_SYMBOL;
  defenderSymbol = DEFENDER_SYMBOL;
  seekerSymbol = SEEKER_SYMBOL;

  @Input() imageUrl!: string;
  @Input() spriteUrl!: string;
  @Input() unitClass!: string;
  @Input() rarity!: string;  
  @Input() characterName!: string;

  getBannerRarityImage() {
    return this.rainbowBannerImage;
  }

  getBannerRarityBackgroundImage() {
    return this.rainbowBannerBackground;
  }

  getClassSymbol() {
    if (this.unitClass === "watcher") {
      return this.watcherSymbol;
    } if (this.unitClass === "destroyer") {
      return this.destroyerSymbol;
    } if (this.unitClass === "breaker") {
      return this.breakerSymbol;
    } if (this.unitClass === "defender") {
      return this.defenderSymbol;
    } if (this.unitClass === "seeker") {
      return this.seekerSymbol;
    }
    return this.watcherSymbol;
  }
}
