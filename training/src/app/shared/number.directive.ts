import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumber]'
})
export class NumberDirective {

  constructor(private ref: ElementRef) {
    //console.log('directive loaded');
  }

  @HostListener('blur')
  blur() {
    // console.log('blur event fired');
    let val = this.ref.nativeElement.value;

    if (isNaN(val))
    {
      this.ref.nativeElement.style.borderColor = 'red';
      this.ref.nativeElement.title = 'The value is not valid';
    }
    else
    {
      this.ref.nativeElement.style.borderColor = null;
      this.ref.nativeElement.title = null;
    }
  }

}
