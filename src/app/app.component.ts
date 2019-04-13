import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { MovieCardComponent } from './movie-card/movie-card.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  value;
  movies;
  apiResponse;
  title = 'frontend-project';
  
  constructor(private appService: AppService) {}
  
  ngOnInit() {
    this.appService.getMovies().subscribe(res => {
        this.apiResponse = res;
        this.movies = this.apiResponse.results
        console.log(this.movies)
      })
  }
}
