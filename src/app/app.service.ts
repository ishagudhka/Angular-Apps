import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class AppService {
  constructor() {}
  userData = new EventEmitter<any>();

  saveData(data) {
    this.userData.emit(data);
  }
}
