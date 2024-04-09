import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { HeaderRequest } from 'src/app/shared/interfaces/global.interface';

@Component({
  selector: 'calculator-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
 

  public onLogout(): void {
    const userData: HeaderRequest = JSON.parse(localStorage.getItem('userData'));
    
    this.auth.logout(userData).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/login']);
        } else {
          console.error('Error en el cierre de sesión.');
        }
      },
      error => {
        console.error('Error en la solicitud de cierre de sesión:', error);
      }
    );
  }
}
