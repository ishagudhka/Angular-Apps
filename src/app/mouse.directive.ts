import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[MouseHover]',
})
export class MouseHover {
  constructor() {}
  // @Output() customHover = new EventEmitter<any>();
  @HostBinding('style.background') background: string;
  @HostBinding('class.highlight') highlight: boolean;
  @HostListener('mouseover') onMouseOver() {
    // console.log('Mouse over');
    this.background = 'yellow';
    this.highlight = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight = false;
  }
}
