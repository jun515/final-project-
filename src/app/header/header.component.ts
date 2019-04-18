import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  value;
  constructor() { }

  ngOnInit() {
    console.log(this.value)
  }
  
  onSubmit(value) {
    console.log(value);
   this.value = null;
  }

}
