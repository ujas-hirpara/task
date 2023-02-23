import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appVal]'
})
export class ValDirective {

  constructor(element:ElementRef) { 
    element.nativeElement.style.width = "200px"
  }
     
}
