import { Component, Input } from '@angular/core';

@Component({
  selector: 'calculator-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  @Input() public value:string = '0';
}
