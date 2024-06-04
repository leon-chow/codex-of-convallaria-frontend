import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters/characters.service';
import { ICharacter } from '../../models/character';
import { NgFor } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [TitleCasePipe, NgFor, CardComponent, CommonModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css',
})
export class CollectionComponent {

  constructor(private route: ActivatedRoute, private router: Router, private characterService: CharactersService) {

  }

  characters?: ICharacter[] = [];

  // TODO: Fix
  ngOnInit() {
    this.characters = this.characterService.characters;
  }
  
  header = this.route.snapshot.data["type"];
}
