import { Component, Input } from '@angular/core';
import { ICharacter } from '../../models/character';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters/characters.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  providers: [CharactersService]
})
export class DetailsComponent {
  activeCharacter?: ICharacter;
  constructor(private router: Router, private route: ActivatedRoute, private characterService: CharactersService) {
    this.activeCharacter = this.router.getCurrentNavigation()?.extras.state?.['activeCharacter'];
  }

  id: string | null = this.route.snapshot.paramMap.get('id');
  
  ngOnInit() {

  }
}
