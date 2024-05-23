import { Component, Input } from '@angular/core';
import { ICharacter } from '../../models/character';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [LowerCasePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() details!: ICharacter;
  
  ngOnInit() {
    console.log(this.details);
  }
}
