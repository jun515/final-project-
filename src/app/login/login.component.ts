import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form={};

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(form) {
      console.log(this.form)
    }

}
