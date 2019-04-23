import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { MovieCardComponent } from './movie-card/movie-card.component'
import { HeaderComponent } from './header/header.component'
import { SideNavComponent } from './side-nav/side-nav.component'
import { MoviesComponent } from './movies/movies.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  value;
  movies;
  apiResponse;
  newUser;
  
  constructor(private appService: AppService) {}
  
  ngOnInit() {
    this.appService.getTopRated().subscribe(res => {
        this.apiResponse = res;
        this.movies = this.apiResponse.results;
      
    })
    
    this.newUser = {
      "firstName": "Mark",
      "lastName": "Nonchamp",
      "email": "beginnersluck@yousuck.com",
      "password": "string"
    }
        
    // this.appService.createUser(this.newUser).subscribe(res => {
    //   console.log(res)
    // })
    
   
}
  
  
}
