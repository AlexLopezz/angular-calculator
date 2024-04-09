import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './pages/calculator.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
import { DisplayComponent } from './components/display/display.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalculatorRoutingModule
  ],
  declarations: [ CalculatorComponent, LogoutComponent, DisplayComponent, ButtonsComponent, HistoryComponent ]
})
export class CalculatorModule { }
