import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from './color.directive';
import { FileSizePipe } from './file-size.pipe';
import { NumberDirective } from './number.directive';
import { CurrencyDirective } from './currency.directive';



@NgModule({
  declarations: [ColorDirective, FileSizePipe, NumberDirective, CurrencyDirective],
  imports: [
    CommonModule
  ],
  exports: [ColorDirective, FileSizePipe, NumberDirective, CurrencyDirective]
})
export class SharedModule { }
