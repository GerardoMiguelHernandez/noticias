import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';


const apiKey = environment.apikey;
const apiUrl = environment.apiUrl;
const header = new HttpHeaders({
'X-Api-key' : apiKey
});
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(){
    return this.http.get<RespuestaTopHeadLines>('https://newsapi.org/v2/top-headlines?country=us&apiKey=ef03a5aab24f4e3a8ce3e0eb9ac1b99f');
  }

  getTopNoticias(){
    return this.http.get('https://newsapi.org/v2/sources?country=de&category=business&apiKey=ef03a5aab24f4e3a8ce3e0eb9ac1b99f');
  }
}
