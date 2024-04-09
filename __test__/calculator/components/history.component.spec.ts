import { CalculatorService } from 'src/app/calculator/services/calculator.service';
import { HistoryComponent } from '../../../src/app/calculator/components/history/history.component';
import { CalculatorComponent } from 'src/app/calculator/pages/calculator.component';
import { of, throwError } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;
  let calculatorService: CalculatorService;
  let calculatorComponent: CalculatorComponent;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations:[HistoryComponent], 
        providers: [
          { provide: CalculatorService, useValue: { deleteOneHistory: jest.fn().mockReturnValue(of(null)) } },
          { provide: CalculatorComponent, useValue: { refreshHistory: jest.fn() } }
        ]
      }).compileComponents();

      calculatorService = TestBed.get(CalculatorService);
      calculatorComponent = TestBed.get(CalculatorComponent);
    });
    
    beforeEach(() => {
      fixture = TestBed.createComponent(HistoryComponent);
      component = fixture.componentInstance;

      component.historial = [
        {id: 1, operations: "1+6", result:7},
        {id: 2, operations: "6/2", result: 3},
        {id: 3, operations: "6*2", result: 12}
      ];
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render the history list correctly', () => {
      const compiled = fixture.nativeElement;
      const paragraphs = compiled.querySelectorAll('p');

      expect(paragraphs.length).toEqual(component.historial.length);
      
      component.historial.forEach((operations, index) => {
        const expectedText = `${operations.operations} = ${operations.result}`;
        expect(paragraphs[index].textContent).toContain(expectedText);
      });
    });

    it('should call deleteOneHistory', () => {
      const idToDelete = 1;
      const spyRefresh = spyOn(calculatorComponent, 'refreshHistory');

      component.deleteOneHistory(idToDelete);

      expect(calculatorService.deleteOneHistory).toHaveBeenCalledWith(idToDelete);
      expect(spyRefresh).toHaveBeenCalled();
    });

    it('should handle delete operation errror', () => {
      const idToDelete = 1;
      const errorMessage = "Al borrar una operación";
      spyOn(calculatorService, 'deleteOneHistory')
            .and.returnValue(throwError(errorMessage));
      const consoleSpy = spyOn(console, 'error');
      
      component.deleteOneHistory(idToDelete);

      expect(calculatorService.deleteOneHistory).toHaveBeenCalledWith(idToDelete);
      expect(calculatorComponent.refreshHistory).not.toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith('Error: ' + errorMessage);
    });
});
