import { Component, Input } from '@angular/core';
import { RAINBOW_BANNER_BACKGROUND, RAINBOW_BANNER_IMAGE, WATCHER_SYMBOL } from '../../utils/constants';

@Component({
  selector: 'app-recruit-card',
  standalone: true,
  imports: [],
  templateUrl: './recruit-card.component.html',
  styleUrl: './recruit-card.component.css'
})
export class RecruitCardComponent {
  rainbowBannerImage = RAINBOW_BANNER_IMAGE;
  rainbowBannerBackground = RAINBOW_BANNER_BACKGROUND;
  watcherSymbol = WATCHER_SYMBOL;

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
    }
    return this.watcherSymbol;
  }
}
