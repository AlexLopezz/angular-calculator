import { Component,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthRequest } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { HeaderRequest } from 'src/app/shared/interfaces/global.interface';
import { ValidatorService } from 'src/app/shared/services/validator/validator-service.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() showSignupFormChange = new EventEmitter<boolean>();

  toggleSignupForm() {
    this.showSignupFormChange.emit(true);
  }
  public loginForm:FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  constructor( 
    private formBuilder:FormBuilder,
    private auth:AuthService,
    private router:Router,
    private validator:ValidatorService 
  ) { }

  public isValidField( formLogin:FormGroup, field:string ):boolean {
    return this.validator.isInvalidField( formLogin, field );
  }

  public doLogin():void {
    if( this.loginForm.invalid ) return;
    const user:UserAuthRequest = this.loginForm.value as UserAuthRequest; 
    console.log( user );

    this.auth.login( user )
      .subscribe( response => {
        const userData:HeaderRequest = {
          userID: response.userId,
          sessionID: response.sessionId
        }
        console.log( userData );
        localStorage.setItem('userData', JSON.stringify( userData ));
        this.router.navigateByUrl('/calculator');
      },
      error => {
        if (error.status === 404) {
          // Mostrar una alerta de JavaScript con mensaje de error
          alert('Error en el inicio de sesión: Usuario no registrado');
        } else {
          console.error('Error en el inicio de sesión:', error);
        }
      }
    );
}
}