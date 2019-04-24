import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form={};
  user;

   constructor(public appService: AppService, public router: Router, private location: Location) {}

  ngOnInit() {
  }
  
onSubmit(form) {
    console.log(this.form)
    this.appService.loginUser(this.form).subscribe(res => {
      this.user = res;
      sessionStorage.setItem ('token', this.user.token);
      console.log(this.user)
      this.router.navigate(['/']);
  })
}
}
