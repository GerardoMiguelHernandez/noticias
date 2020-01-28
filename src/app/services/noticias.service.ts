import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(){
    return this.http.get<RespuestaTopHeadLines>('https://newsapi.org/v2/top-headlines?country=us&apiKey=ef03a5aab24f4e3a8ce3e0eb9ac1b99f');
  }
}
