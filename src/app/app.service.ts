import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  response;
  movies;
  apiResponse;

  BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
  API_KEY = '98605a382f8c29573f4141943c78c862';
  
  TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?api_key=98605a382f8c29573f4141943c78c862&language=en-US&page=1'
  GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=98605a382f8c29573f4141943c78c862&language=en-US'
  MOVIES_BY_GENRE_URL = 'https://api.themoviedb.org/3/genre/28/movies?api_key=98605a382f8c29573f4141943c78c862&language=en-US'
  KEYWORDS = 'https://api.themoviedb.org/3/discover/movie?api_key=98605a382f8c29573f4141943c78c862&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_keywords='
  
  constructor(public _http: HttpClient) { }
  
  getMovies(input) {
    const url = `${this.BASE_URL}api_key=${this.API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`
    return this._http.get(url)
  }
  
  getTopRated() {
    return this._http.get(this.TOP_RATED);
  }
  
  getGenres() {
    return this._http.get(this.GENRE_URL);
  }
  
  getGenreMovies(input) {
    return this._http.get(`https://api.themoviedb.org/3/genre/${input}/movies?api_key=98605a382f8c29573f4141943c78c862&language=en-US`);
  }
  
  getUser(){
    return this._http.get('http://mean-stack-2019-02-oscar-phortonssf.c9users.io:8080/api/appUsers/5cb54a6406db82089da8ccc1')
  }

  // getId(){
  //   return this._http.get('https://api.themoviedb.org/3/movie/(**ID**)?api_key=98605a382f8c29573f4141943c78c862&language=en-US')
  // }

  getKeywords(value){
    return this._http.get('https://api.themoviedb.org/3/discover/movie?api_key=98605a382f8c29573f4141943c78c862&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_keywords=' + value)
  }


  createUser(newUser){
    return this._http.post('http://mean-stack-2019-02-oscar-phortonssf.c9users.io:8080/api/appUsers', newUser)
  }
  
  loginUser(newUser){
    return this._http.post('http://mean-stack-2019-02-oscar-phortonssf.c9users.io:8080/api/appUsers/login/', newUser)
  
    
  }
}


