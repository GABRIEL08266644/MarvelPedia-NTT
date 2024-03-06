import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseUrl = 'https://gateway.marvel.com/v1/public';
  private ts = '1709757787';
  private apiKey = 'c2416f40d220937a68c3100500893881';
  private hash = 'd5bc43b250625707841a414e626e62ae';

  constructor(private http: HttpClient) { }

  // getCharacters(): Observable<any> {
  //   const url = `${this.baseUrl}/comics?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`;
  //   return this.http.get<any>(url);
  // }

  getCharacters(page: number, limit: number): Observable<any> {
    const offset = (page - 1) * limit;
    const url = `${this.baseUrl}/comics?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}&offset=${offset}&limit=${limit}`;
    return this.http.get<any>(url);
  }
 }
