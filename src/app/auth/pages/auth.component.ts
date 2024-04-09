import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public showSignupForm = true;

  constructor(
  ) { }

  onRegisterSuccess( registerSuccess:boolean ){
    this.showSignupForm = !registerSuccess;
  }
  onToggleSignupForm(showSignupForm: boolean) {
    this.showSignupForm = showSignupForm;
    console.log(showSignupForm)
  }

}
