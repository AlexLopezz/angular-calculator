import { Component, Input } from '@angular/core';
import { ResulOperationResponse } from 'src/app/shared/interfaces/global.interface';
import { CalculatorService } from '../../services/calculator.service';
import { CalculatorComponent } from '../../pages/calculator.component';

@Component({
  selector: 'calculator-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  @Input() public historial:ResulOperationResponse[];

  constructor(private calculatorService: CalculatorService,
              private calculatorComponent: CalculatorComponent) { }

  deleteOneHistory(id:number){
    this.calculatorService.deleteOneHistory(id)
      .subscribe(() => {
        this.calculatorComponent.refreshHistory();
      },error =>
        console.error('Error: ' + error))     
  };
}
