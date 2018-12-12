import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {

  constructor(private e: ElementRef, private r: Renderer2) { 
  r.setStyle(e.nativeElement, 'display', 'block');
  }

}
