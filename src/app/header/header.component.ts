import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  value;
  getMovies;
  movies;
  moviesResponse;
  moviesList
  
  constructor(public appService: AppService) { }

  ngOnInit() {
    // console.log(this.value)
  }
  
  onSubmit(value) {
    this.appService.getKeywords(value).subscribe(res => {
      this.moviesList = res;
      this.movies = this.moviesList.results;
      console.log(this.movies)
    })
    
    
    console.log(value);
  this.value = null;
  }

}
