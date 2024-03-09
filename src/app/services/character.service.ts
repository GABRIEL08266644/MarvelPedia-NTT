import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) { }

  getCharacters(page: number, limit: number): Observable<any> {
    const offset = (page - 1) * limit;
    const url = 
      `${environment.MARVEL_API_URL}/characters?ts=${
        environment.TS
      }&apikey=${environment.MARVEL_API_KEY}&hash=${
        environment.MARVEL_HASH
      }&offset=${offset}&limit=${limit}`;

    return this.http.get<any>(url);
  }
  
  getCharacterDetailsById(id: number): Observable<any> {
    const url = 
      `${environment.MARVEL_API_URL}/characters/${id}?ts=${
        environment.TS
      }&apikey=${environment.MARVEL_API_KEY}&hash=${environment.MARVEL_HASH}`;

    return this.http.get<any>(url);
  }
}
