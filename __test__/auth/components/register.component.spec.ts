import { RegisterComponent } from '../../../src/app/auth/components/register/register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../../../src/app/shared/services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http'; 
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { UserAuthRequest } from '../../../src/app/auth/interfaces/user.interface';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule,HttpClientModule],
      providers: [AuthService, FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call AuthService.signup and emit onRegisterSuccess when form is valid', () => {
    const authServiceSignupSpy = jest.spyOn(authService, 'signup').mockReturnValue(of(undefined));
    const onRegisterSuccessEmitSpy = jest.spyOn(component.onRegisterSuccess, 'emit').mockImplementation(() => {});

    component.signUpForm.setValue({ username: 'testuser', password: 'testpassword'});
    component.onSignUp();

    expect(authServiceSignupSpy).toHaveBeenCalled();
    expect(onRegisterSuccessEmitSpy).toHaveBeenCalledWith(true);
  });

  it('should not call AuthService.signup when form is invalid', () => {
    const authServiceSignupSpy = jest.spyOn(authService, 'signup').mockReturnValue(of(undefined));
    const onRegisterSuccessEmitSpy = jest.spyOn(component.onRegisterSuccess, 'emit').mockImplementation(() => {});

    component.signUpForm.setValue({ username: '', password: ''});
    component.onSignUp();

    expect(authServiceSignupSpy).not.toHaveBeenCalled();
    expect(onRegisterSuccessEmitSpy).not.toHaveBeenCalled();
  });
});
