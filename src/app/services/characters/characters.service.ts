import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../utils/constants';
import { of } from 'rxjs';
import { ICharacter } from '../../models/character';
import { FetchService } from '../fetch/fetch.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  characters: ICharacter[] = [];
  activeCharacter?: ICharacter;
  path = `/characters`;

  constructor(private http: HttpClient, private fetchService: FetchService) { 
    this.getCharacters();
  }

  // Look into persisting this to reduce number of API calls
  getCharacters() {
    this.fetchService.get(this.path).subscribe((characters: ICharacter[]) => {
      for (const character of characters) {
        this.characters.push(character);
      }
    }); 
  }

  setCharacter(currentCharacter: ICharacter) {
    this.activeCharacter = currentCharacter;
  }
}
