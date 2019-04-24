import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    value;
  movies;
  apiResponse;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getTopRated().subscribe(res => {
        this.apiResponse = res;
        this.appService.movies = this.apiResponse.results;
    })
  }

}
