import { Component, Input } from '@angular/core';
import { ICharacter } from '../../models/character';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters/characters.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  providers: [CharactersService]
})
export class DetailsComponent {
  details?: ICharacter;
  constructor(private route: ActivatedRoute, private characterService: CharactersService) {

  }

  id: string | null = this.route.snapshot.paramMap.get('id');
  
  ngOnInit() {
    this.details = this.characterService.characters.find(character => character.id === (this.id ? +this.id : 0)); 
  }
}
