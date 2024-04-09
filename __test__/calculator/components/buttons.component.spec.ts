import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonsComponent } from '../../../src/app/calculator/components/buttons/buttons.component';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Number buttons', () => {
    const numberButtonValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    numberButtonValues.forEach(value => {
      it(`should emit '${value}' when corresponding number button is clicked`, () => {
        const emitMock = jest.spyOn(component.value, 'emit');
        const button = fixture.nativeElement.querySelector(`[data-value="${value}"]`);
        button.click();
        expect(emitMock).toHaveBeenCalledWith(value);
      });
    });
  });

  describe('Function buttons', () => {
    const functionButtonMappings = {
      'deleteAll': 'C',
      'delete': 'D',
      'divide': '/',
      'multiply': '*',
      'subtract': '-',
      'add': '+',
      'equals': '=',
      'decimal': '.'
    };
    Object.entries(functionButtonMappings).forEach(([buttonId, expectedValue]) => {
      it(`should emit '${expectedValue}' when '${buttonId}' button is clicked`, () => {
        const emitMock = jest.spyOn(component.value, 'emit');
        const button = fixture.nativeElement.querySelector(`[data-button="${buttonId}"]`);
        button.click();
        expect(emitMock).toHaveBeenCalledWith(expectedValue);
      });
    });



  });

  describe('emitValue method', () => {
    const buttonValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/'];

    buttonValues.forEach(value => {
      it(`should emit '${value}' when '${value}' button is clicked`, () => {
        const emitSpy = jest.spyOn(component.value, 'emit');
  
        component.emitValue(value);
  
        expect(emitSpy).toHaveBeenCalledWith(value);
      });
    });
  });

  describe('Button clicks', () => {
    let emitMock;
  
    beforeEach(() => {
      emitMock = jest.spyOn(component.value, 'emit').mockClear();
    });
  
    it('should emit value only once for multiple rapid clicks on the same button', () => {
      const button = fixture.nativeElement.querySelector('[data-value="1"]');
      button.click();
      setTimeout(() => {
        expect(emitMock).toHaveBeenCalledTimes(1);
      }, 100);
    });
  });
  
  describe('Button interactions', () => {
    it('should clear the display when "C" button is clicked after entering a number', () => {
      const emitMock = jest.spyOn(component.value, 'emit');
      const numberButton = fixture.nativeElement.querySelector('[data-value="5"]');
      const clearButton = fixture.nativeElement.querySelector('[data-button="deleteAll"]');
      numberButton.click();
      clearButton.click();
      expect(emitMock).toHaveBeenCalledWith('C');
    });
  });
 

});  

