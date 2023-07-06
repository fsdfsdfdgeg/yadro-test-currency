import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency.component';
import { CurrencyElemComponent } from './currency-elem/currency-elem.component';

@NgModule({
  declarations: [CurrencyComponent, CurrencyElemComponent],
  exports: [CurrencyComponent],
  imports: [CommonModule],
})
export class CurrencyModule {}
