import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../utils/constants';
import { ICharacter } from '../../models/character';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  token = "qhp9Fi53DlPzz7U3kD0AfkQVrYd1Mz4kT2QC8IFIVDnefPVfm5r35QALs3Wjdb6k";
  header = new HttpHeaders({ 
    'Authorization': `Bearer ${this.token}`, 
  });
  constructor(private http: HttpClient) { 

  }

  get(path?: string, headers?: HttpHeaders) {
    const constructedUrl = API_URL + path;
    return this.http.get<ICharacter[]>(constructedUrl, {headers: this.header, ...headers});
  }
}
