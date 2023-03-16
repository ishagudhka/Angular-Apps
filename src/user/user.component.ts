import { Component, OnInit } from '@angular/core';
import { AppService } from '../app/app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private service: AppService) {}
  userData: any;
  ngOnInit() {
    this.service.userData.subscribe((data) => {
      console.log(data);
      this.userData = data;
    });
  }
}
