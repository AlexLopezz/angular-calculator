import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { LoginComponent } from '../../../src/app/auth/components/login/login.component';
import { AuthService } from '../../../src/app/shared/services/auth/auth.service';
import { ValidatorService } from 'src/app/shared/services/validator/validator-service.service';
import { of,throwError } from 'rxjs';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
      providers: [
        { provide: AuthService, useValue: { login: jest.fn() } },
        { provide: ValidatorService, useValue: { isInvalidField: jest.fn() } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false if the field is valid', () => {
    const validatorService = TestBed.get(ValidatorService);
    validatorService.isInvalidField.mockReturnValue(false);

    const form = component.loginForm;
    expect(component.isValidField(form, 'username')).toBe(false);
  });

  it('should return true if the field is invalid', () => {
    const validatorService = TestBed.get(ValidatorService);
    validatorService.isInvalidField.mockReturnValue(true);

    const form = component.loginForm;
    expect(component.isValidField(form, 'username')).toBe(true);
  });

  it('should not call authService.login if form is invalid', () => {
    const authService = TestBed.get(AuthService);
    const formValue = { username: '', password: '' };
    component.loginForm.setValue(formValue);
    authService.login.mockClear();
    component.doLogin();
    expect(authService.login).not.toHaveBeenCalled();
  });

  it('should call authService.login and navigate when form is valid', async () => {
    const authService = TestBed.get(AuthService);
    const router = TestBed.get(Router);
    const formValue = { username: 'testuser', password: 'testpassword' };
    component.loginForm.setValue(formValue);
    authService.login.mockReturnValue(of({ userId: 1, sessionId: 'session123' }));
    const navigateByUrlSpy = jest.spyOn(router, 'navigateByUrl').mockImplementation(() => {});

    await component.doLogin();

    expect(authService.login).toHaveBeenCalledWith(formValue);
    expect(navigateByUrlSpy).toHaveBeenCalledWith('/calculator');
  });

  it('should handle 404 error by showing alert', async () => {
    const authService = TestBed.get(AuthService);
    const formValue = { username: 'testuser', password: 'testpassword' };
    component.loginForm.setValue(formValue);
    authService.login.mockReturnValue(throwError({ status: 404 }));

    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    await component.doLogin();

    expect(alertSpy).toHaveBeenCalledWith('Error en el inicio de sesión: Usuario no registrado');
  });

  it('should handle other errors by logging to console', async () => {
    const authService = TestBed.get(AuthService);
    const formValue = { username: 'testuser', password: 'testpassword' };
    component.loginForm.setValue(formValue);
    authService.login.mockReturnValue(throwError({ status: 500 }));


    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await component.doLogin();
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error en el inicio de sesión:', expect.any(Object));
  });
});