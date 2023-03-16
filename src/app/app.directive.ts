import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class AppDirective {
  constructor(private element: ElementRef) {
    (<HTMLElement>element.nativeElement).style.backgroundColor = 'green';
  }
}
