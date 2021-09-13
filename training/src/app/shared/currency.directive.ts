import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCurrency]'
})
export class CurrencyDirective {

  @Input() symbol: string = '$';
  actualValue = 0;
  constructor(private ref: ElementRef) { }

  @HostListener('blur')
  blur() {
    this.actualValue = this.ref.nativeElement.value;
    this.ref.nativeElement.value = this.symbol + parseFloat(this.ref.nativeElement.value).toFixed(2);
  }

  @HostListener('focus')
  focus() {
    this.ref.nativeElement.value = this.actualValue;
  }
}
