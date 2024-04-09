import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CalculatorService } from '../../../src/app/calculator/services/calculator.service';
import { CalculatorComponent } from '../../../src/app/calculator/pages/calculator.component';
import { LogoutComponent } from '../../../src/app/calculator/components/logout/logout.component';
import { AuthService } from '../../../src/app/shared/services/auth/auth.service';
import { DisplayComponent } from '../../../src/app/calculator/components/display/display.component';
import { ButtonsComponent } from '../../../src/app/calculator/components/buttons/buttons.component';
import { HistoryComponent } from '../../../src/app/calculator/components/history/history.component';
import { of } from 'rxjs';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let compiled: HTMLElement;
  let calculatorService: CalculatorService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CalculatorComponent,
        LogoutComponent, 
        DisplayComponent, 
        ButtonsComponent, 
        HistoryComponent ],
        imports: [ HttpClientTestingModule, RouterTestingModule ],
        providers: [ AuthService ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    calculatorService = TestBed.get(CalculatorService);
  }));

  beforeEach(()=> {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
  })
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize historial and displayValue correctly', () => {
    expect(component.historial).toEqual([]);
    expect(component.displayValue).toBe('0');
  });

  it('should reset displayValue to 0 when C is pressed', () => {
    component.displayValue = '123';
    component.onEmitValue('C');
    expect(component.displayValue).toBe('0');
  });

  it('should delete last character from displayValue when D is pressed', () => {
    component.displayValue = '123';
    component.onEmitValue('D');
    expect(component.displayValue).toBe('12');
  });

  it('should not delete character if displayValue has only 1 character', () => {
    component.displayValue = '1';
    component.onEmitValue('D');
    expect(component.displayValue).toBe('0');
  });

  it('should append value to displayValue when a number or dot is pressed', () => {
    component.displayValue = '123';
    component.onEmitValue('4');
    expect(component.displayValue).toBe('1234');
    component.onEmitValue('.');
    expect(component.displayValue).toBe('1234.');
  });

  it('should calculate result and update displayValue and history when = is pressed', async () => {
    component.displayValue = '2+2';
    const calculateSpy = jest.spyOn(calculatorService, 'calculate').mockReturnValue(of({ resultado: '4' }));
    const refreshHistorySpy = jest.spyOn(component, 'refreshHistory').mockImplementation(() => {});

    await component.onEmitValue('=');

    expect(calculateSpy).toHaveBeenCalledWith('2+2');
    expect(component.displayValue).toBe('4');
    expect(refreshHistorySpy).toHaveBeenCalled();
  });

  it('should refresh history correctly', async () => {
    const history = [{ operation: '2+2', result: '4' }];
    jest.spyOn(calculatorService, 'getUserHistory').mockReturnValue(of(history));

    await component.refreshHistory();

    expect(component.historial).toEqual(history);
  });
});
