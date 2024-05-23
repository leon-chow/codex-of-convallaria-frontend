import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters/characters.service';
import { ICharacter } from '../../models/character';
import { NgFor } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [TitleCasePipe, NgFor, CardComponent],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css',
})
export class CollectionComponent {

  constructor(private route: ActivatedRoute, private router: Router, private characterService: CharactersService) {

  }

  characters: ICharacter[] = [];

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacters().subscribe((characters: ICharacter[]) => {
      this.characters = characters;
    });
  }
  
  header = this.route.snapshot.data["type"];
}
