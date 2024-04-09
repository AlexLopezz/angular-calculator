import { TestBed } from '@angular/core/testing';

import { CalculatorService } from '../../../src/app/calculator/services/calculator.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OperationResponse } from 'src/app/shared/interfaces/global.interface';
import { ResulOperationResponse, HeaderRequest } from '../../../src/app/shared/interfaces/global.interface';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let expression:string;
  let operationResponse:OperationResponse;
  
  beforeAll(()=> {
    const dataRequest:HeaderRequest = { userID:1, sessionID:'simulated' }
    localStorage.setItem('userData', JSON.stringify( dataRequest) ); 
  })

  beforeEach(() =>  {
    TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }) 
    service = TestBed.get (CalculatorService);
  });

  beforeEach(() => {
    expression = '2+2';
    operationResponse= { resultado: '4' }
  })

  it('Deberia crearse el componente', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });

  it('Deberia realizar la expresion', () => {
    const spy = jest.spyOn(service, 'calculate').mockReturnValue( operationResponse );
    const calculateResult = service.calculate(expression);

    expect(spy).toHaveBeenCalled();
    expect(calculateResult).toEqual(operationResponse);
  });

  it('No deberia realizar la expresion del usuario', () => {
    operationResponse = { resultado: 'hola' };

    const spy = jest.spyOn(service, 'calculate').mockReturnValue( Error('Unknown expression.') );
    const calculateResult = service.calculate(expression);

    expect(spy).toHaveBeenCalled();
    expect(calculateResult).toEqual(Error('Unknown expression.'));
  });

  it('Deberia mostrar todas las operaciones que hizo el usuario', () => {
    const userHistory:ResulOperationResponse[] = [
      {
        id: 1,
        operations: '2+2',
        result: 4
      },{
        id: 2,
        operations: '10*2',
        result: 20
      },{
        id: 3,
        operations: '50/2',
        result: 25
      }
    ]
    
    const spy = jest.spyOn(service, 'getUserHistory').mockReturnValue( userHistory );
    const calculateResult = service.getUserHistory();

    expect(spy).toHaveBeenCalled();
    expect(calculateResult).toEqual( userHistory );
  });

  it('Deberia eliminar una operacion realizada por el usuario', () => {
    const spy = jest.spyOn(service, 'deleteOneHistory');
    service.deleteOneHistory(1);
    expect(spy).toHaveBeenCalled();
  });

});
