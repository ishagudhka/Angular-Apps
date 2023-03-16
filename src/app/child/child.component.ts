import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, AfterContentInit {
  @Input('data') data: string;
  @Output() colorData = new EventEmitter<string>();
  @ContentChild('para1') para1: ElementRef;
  constructor() {}

  ngOnInit() {
    // console.log(this.data);
  }

  callMe() {}
  ngAfterContentInit() {}
}
