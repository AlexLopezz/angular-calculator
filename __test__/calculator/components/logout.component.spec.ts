import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LogoutComponent } from '../../../src/app/calculator/components/logout/logout.component';
import { AuthService } from '../../../src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { HeaderRequest } from 'src/app/shared/interfaces/global.interface';

describe('LogoutComponent', () => {
  let fixture: ComponentFixture<LogoutComponent>;
  let component: LogoutComponent;
  let authService: AuthService;
  let router: Router;

beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoutComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: AuthService, useValue: { logout: jest.fn() } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call authService.logout and navigate to login on successful logout', async () => {
    const userData: HeaderRequest = {
      userID: 0,
      sessionID: ''
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    jest.spyOn(authService, 'logout').mockReturnValue(of(true));

    const navigateSpy = spyOn(router, 'navigate').and.stub();

    await component.onLogout();

    expect(authService.logout).toHaveBeenCalledWith(userData);
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });

  it('should handle logout error by logging to console', async () => {
    const userData: HeaderRequest = {
      userID: 123,
      sessionID: 'abc123'
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    const error = new Error('Logout failed');
    jest.spyOn(authService, 'logout').mockReturnValue(throwError(error));
  
    const consoleErrorSpy = spyOn(console, 'error').and.callThrough();
  
    await component.onLogout();
  
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error en la solicitud de cierre de sesión:', error);
  });
  
});