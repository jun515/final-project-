import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  genresResponse;
  genres;
  results;

  constructor(private appService: AppService, public appComponent: AppComponent) {}

  ngOnInit() {
    this.appService.getGenres().subscribe(res => {
        this.genresResponse = res;
        this.genres = this.genresResponse.genres;
      })
  }
  
  onClick(genre){
    this.appService.getGenreMovies(genre.id).subscribe(res => {
        this.results = res;
        this.appService.movies = this.results.results
      })
  }
 

}
