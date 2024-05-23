import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../utils/constants';
import { of } from 'rxjs';
import { ICharacter } from '../../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  token = "qhp9Fi53DlPzz7U3kD0AfkQVrYd1Mz4kT2QC8IFIVDnefPVfm5r35QALs3Wjdb6k";
  header = new HttpHeaders({ 
    'Authorization': `Bearer ${this.token}`, 
  });

  constructor(private http: HttpClient) { 

  }

  getCharacters() {
    const url = `${API_URL}/characters`; 
    return this.http.get<ICharacter[]>(url, {headers: this.header});
  }
}
