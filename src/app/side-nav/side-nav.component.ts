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

  constructor(private appService: AppService, public appComponent: AppComponent) {}

  ngOnInit() {
    this.appService.getGenres().subscribe(res => {
        this.genresResponse = res;
        this.genres = this.genresResponse.genres;
        console.log(this.genres)
      })
  }
  
  // onClick(){
  //   console.log(this.genres.id)
  //   this.genres = null
  // }
 

}
