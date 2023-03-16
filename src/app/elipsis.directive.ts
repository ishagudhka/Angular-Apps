import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appElipsis]',
})
export class ElipsisDirective {
  constructor() {}
  @HostBinding('class.elipsis') iselipsis: boolean;
  @HostListener('mouseover') onMouseOver() {
    this.iselipsis = true;
  }
  @HostListener('mouseleave') onmouseleave() {
    this.iselipsis = false;
  }
}
