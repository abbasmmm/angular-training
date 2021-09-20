import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private ref: ElementRef) { }

  ngOnInit() {
    let val = this.ref.nativeElement.innerText;
    let color = 'green';
    
    console.log(val);

    if (val < 35)
      color = 'red';
    else if (val < 70)
      color = 'orange'

    this.ref.nativeElement.style.backgroundColor = color;
  }
}
