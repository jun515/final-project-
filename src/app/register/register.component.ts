import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form={};
  user;

  constructor(public appService: AppService, public router: Router) { }

  ngOnInit() {
  }
  
  onSubmit(form) {
    console.log(this.form)
    this.appService.createUser(this.form).subscribe(res => {
      this.user = res;
      sessionStorage.setItem ('token', this.user.token);
      console.log(this.user)
      this.router.navigate(['/']);
  })
    
    

}
}