import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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
  moviesList;
  hasToken = null;
  form = {}
  
  constructor(public appService: AppService,public router: Router, private location: Location) { }

  ngOnInit() {
    this.hasToken=sessionStorage.getItem("token")
    console.log(this.hasToken);
  }
  
  onSubmit(value) {
    console.log(value)
    this.appService.searchMovies(value).subscribe(res => {
      this.moviesList = res;
      this.appService.movies = this.moviesList.results;
      console.log(this.moviesList)
    })
  }
    
    onClick() {
      console.log('Ouch!')
      sessionStorage.clear();
      this.router.navigate(['/']);
      location.reload();
  }
  
  login(){
    this.router.navigate(['login']);
  }

}
