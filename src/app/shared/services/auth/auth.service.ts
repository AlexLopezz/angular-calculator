import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthRequest, UserAuthResponse } from '../../../auth/interfaces/user.interface';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HeaderRequest } from '../../interfaces/global.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public login(user: UserAuthRequest):Observable<UserAuthResponse> {
    return this.http.post<UserAuthResponse>('/login', user)
      .pipe(catchError( () => { throw Error('Credentials error.') }));
  }

  public signup(user: UserAuthRequest):Observable<UserAuthResponse> {
    return this.http.post<UserAuthResponse>('/signup', user)
      .pipe(catchError( () => { throw Error('A user with the same credentials already exists.') }));
  }

  public logout(dataRequest: HeaderRequest): Observable<boolean> {
    const httpHeaders: HttpHeaders = new HttpHeaders()
      .append('userID', dataRequest.userID.toString())
      .append('sessionID', dataRequest.sessionID);
  
    return this.http.get('/logout', { headers: httpHeaders })
      .pipe(
        map(response => {
          if (response == null || response === undefined) {
            return true;
          }
          return response['status'] === 200;
        })
      );
  }

}
