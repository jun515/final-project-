import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  response;

  BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
  API_KEY = '98605a382f8c29573f4141943c78c862';
  GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=98605a382f8c29573f4141943c78c862&language=en-US'

  constructor(public _http: HttpClient) { }
  
  // getMovies(input) {
  //   const url = `${this.BASE_URL}api_key${this.API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`
  //   return this._http.get(url)
  // }
  
  getMovies() {
    const url = `${this.BASE_URL}api_key=${this.API_KEY}&language=en-US&query=hangover&page=1&include_adult=false`
    console.log(url)
    return this._http.get(url);
  }
  
  getGenres() {
    return this._http.get(this.GENRE_URL);
  }
  
  
}
