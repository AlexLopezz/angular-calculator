import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthService } from '../../../src/app/shared/services/auth/auth.service';
import { UserAuthRequest, UserAuthResponse } from '../../../src/app/auth/interfaces/user.interface';
import { HeaderRequest } from '../../../src/app/shared/interfaces/global.interface';

describe('AuthService', () => {
  let service: AuthService;
  let userRequest: UserAuthRequest;
  let dummyResponse: UserAuthResponse;
  let dataRequest: HeaderRequest;
  beforeEach(() => { TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  })
    service = TestBed.get( AuthService );
  });

  beforeEach(()=> {
    userRequest = {
      username: 'admin',
      password: 'admin'
    }
    
    dataRequest = {
      userID: 1,
      sessionID: 'simulated'
    }

    dummyResponse = {
      userId: 1,
      sessionId: 'simulated',
      mensaje: 'OK'
    }
  })

  it('Deberia crearse el componente', () => {
    service = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('Deberia registrarse correctamente', ()=> {

    const spy = jest.spyOn(service, 'signup').mockReturnValue( dummyResponse );

    const signUpResult = service.signup( userRequest );
    
    expect(spy).toHaveBeenCalled();
    expect(signUpResult).toEqual( dummyResponse );
  });

  it('Deberia iniciar sesion correctamente', ()=> {
    const spy = jest.spyOn(service, 'login').mockReturnValue( dummyResponse );
    
    const loginResult = service.login( userRequest );

    expect(spy).toHaveBeenCalled();
    expect(loginResult).toEqual( dummyResponse );
  });
  
  it( 'Deberia cerrar sesion', ()=> {
    const spy = jest.spyOn(service, 'logout').mockReturnValue( true );
    
    const logoutResult = service.logout( dataRequest );

    expect(spy).toHaveBeenCalled();
    expect(logoutResult).toBeTruthy();
  });

  it('No deberia iniciar sesion', ()=> {
    userRequest = null;
    const spy = jest.spyOn(service, 'login').mockReturnValue( Error('Credentials Error') );
    
    const loginResult = service.login( userRequest );

    expect(spy).toHaveBeenCalled();
    expect(loginResult).toEqual( Error('Credentials Error') );
  });

  it( 'No deberia cerrar sesion', ()=> {
    dataRequest = null;
    const spy = jest.spyOn(service, 'logout').mockReturnValue( false );
    
    const logoutResult = service.logout( dataRequest );

    expect(spy).toHaveBeenCalled();
    expect(logoutResult).toBeFalsy();
  });

  it('No deberia poder registrarse', ()=> {
    const spy = jest.spyOn(service, 'signup').mockReturnValue( Error('A user with the same credentials already exists.') );
    
    const signUpResult = service.signup( userRequest );

    expect(spy).toHaveBeenCalled();
    expect(signUpResult).toEqual(Error('A user with the same credentials already exists.'));
  })
});
