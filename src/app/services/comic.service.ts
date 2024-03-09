import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  constructor(private http: HttpClient) { }

  
  getComicsByCharacterId(id: number): Observable<any> {
    const url = 
      `${environment.MARVEL_API_URL}/characters/${id}/comics?ts=${
        environment.TS
      }&apikey=${environment.MARVEL_API_KEY}&hash=${environment.MARVEL_HASH}`;

    return this.http.get<any>(url);
  }

  getComicById(id: number): Observable<any> {
    const url = 
      `${environment.MARVEL_API_URL}/comics/${id}?ts=${
        environment.TS
      }&apikey=${environment.MARVEL_API_KEY}&hash=${environment.MARVEL_HASH}`;

    return this.http.get<any>(url);
  }

  getCharactersByComicId(id: number): Observable<any> {
    const url = 
      `${environment.MARVEL_API_URL}/comics/${id}/characters?ts=${
        environment.TS
      }&apikey=${environment.MARVEL_API_KEY}&hash=${environment.MARVEL_HASH}`;

    return this.http.get<any>(url);
  }
}
