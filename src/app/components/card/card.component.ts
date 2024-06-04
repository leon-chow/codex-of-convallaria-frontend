import { Component, Input } from '@angular/core';
import { ICharacter } from '../../models/character';
import { LowerCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { CharactersService } from '../../services/characters/characters.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [LowerCasePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private router: Router, private characterService: CharactersService) {

  }
  @Input() details!: ICharacter;
  
  ngOnInit() {
    console.log(this.details);
  }

  viewDetails(characterId: number) {
    this.characterService.setCharacter(this.details);
    this.router.navigate(['/characters', this.details.id])
  }
}
