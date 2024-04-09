import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeaderRequest, OperationResponse, ResulOperationResponse } from 'src/app/shared/interfaces/global.interface';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(
    private http: HttpClient

  ) { }

  calculate(expression: string):Observable<OperationResponse>{
    const body = { expresion:expression};
    const headerRequest:HeaderRequest = JSON.parse(localStorage.getItem('userData'));
    
    const httpHeaders:HttpHeaders= new HttpHeaders()
      .append('userID', headerRequest.userID.toString())
      .append('sessionID', headerRequest.sessionID);
    
    return this.http.post<OperationResponse>( '/operations', body, { headers: httpHeaders } )
      .pipe(catchError(()=> { throw Error('Unknown expression.') }));
  }
  getUserHistory():Observable<ResulOperationResponse[]> {
    const headerRequest:HeaderRequest = JSON.parse(localStorage.getItem('userData'));
    
    const httpHeaders:HttpHeaders= new HttpHeaders()
      .append('userID', headerRequest.userID.toString())
      .append('sessionID', headerRequest.sessionID);
    
    return this.http.get<ResulOperationResponse[]>( '/operations', {headers: httpHeaders} );
  }

  deleteOneHistory(id:number):Observable<void>{
    const HeaderRequest: HeaderRequest = JSON.parse(localStorage.getItem('userData'));

    const httpHeaders: HttpHeaders = new HttpHeaders()
    .append('userID', HeaderRequest.userID.toString())
    .append('sessionID', HeaderRequest.sessionID);
    
    const url = `/operations/${id}`;
    return this.http.delete<void>(url, { headers: httpHeaders });
  }
}