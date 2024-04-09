import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'calculator-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Output() value:EventEmitter<string>= new EventEmitter();

  public emitValue( value:string ):void {
    this.value.emit(value);
  }
}
