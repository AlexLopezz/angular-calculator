import { ResulOperationResponse } from './../../shared/interfaces/global.interface';
import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit{
  public historial:ResulOperationResponse[]= [];
  public displayValue:string= '0';

  constructor(
    private calculatorService: CalculatorService,
  ) { }
  ngOnInit(): void {
    this.refreshHistory();
  }

  onEmitValue( value:string ):void {
    switch(value){
      case 'C':
        this.displayValue ='0';
        break;
      case 'D':
        if(this.displayValue.length > 1){
          this.displayValue= this.displayValue.slice(0, -1);
          break;
        }
        this.displayValue='0';
        break;
      case '=':
        this.calculate();
        break;
      case '.':
        if(this.displayValue[this.displayValue.length-1] === '.') break;

        this.displayValue+=value;
        break;
      default:
        if( this.displayValue.length === 1 
          && this.displayValue[0] === '0' ) { 
          this.displayValue= value;
          break;
        }
        this.displayValue+= value;
    }   
  }

  public calculate():void {
    this.calculatorService.calculate( this.displayValue )
      .subscribe(response => { 
        this.displayValue= response.resultado; 
        this.refreshHistory();
      });
  }

  public refreshHistory():void {
    this.calculatorService.getUserHistory()
      .subscribe(response => this.historial = response );
  }

}
