import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  ContentChild,
  AfterContentInit,
} from '@angular/core';
import { AppService } from './app.service';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private service: AppService) {}
  isVisible: boolean = false;
  childData: string = 'Sent from parent';
  para: string;
  @ViewChild('chose') chose: ElementRef;
  @ViewChild('child') child: ChildComponent;
  users = [
    { name: 'Isha', age: 25 },
    { name: 'Raj', age: 20 },
  ];
  ngOnInit() {
    this.para =
      'Hi I am very big paraghraph and I want to test custom pipe elipsis feature I want to become a very big paragraph';
  }
  ngAfterViewInit() {
    // console.log(this.chose.nativeElement);
    // console.log(this.child.callMe());
  }
  sendData() {
    this.sendData1(this.users);
  }
  sendData1(users?) {
    this.service.saveData(users);
  }
}
