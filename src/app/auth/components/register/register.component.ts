import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserAuthRequest } from '../../interfaces/user.interface';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() onRegisterSuccess = new EventEmitter<boolean>();
  @Output() showSignupFormChange = new EventEmitter<boolean>();

  public signUpForm:FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
    },
    // { 
    //   validators: [
    //     this.validator.isFieldEqualsTo( 'password', 'confirmPassword' ),
    //   ]
    // }
  );

  constructor(
    private formBuilder:FormBuilder,
    private auth:AuthService,
  ) { }

  onSignUp():void {
    if( this.signUpForm.invalid ) return;

    const { username, password } = this.signUpForm.value;
    const user:UserAuthRequest = { username, password };


    this.auth.signup( user )
      .subscribe( () => {
        this.onRegisterSuccess.emit(true);
      }
    );
  }
  toggleSignupForm() {
    this.showSignupFormChange.emit(false);
  }

}
