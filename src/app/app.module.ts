import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChildComponent } from './child/child.component';
import { AppDirective } from './app.directive';
import { MouseHover } from './mouse.directive';
import { ElipsisDirective } from './elipsis.directive';
import { slicePipe } from './slice.pipe';
import { AppService } from './app.service';
import { UserComponent } from '../user/user.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    AppComponent,
    ChildComponent,
    AppDirective,
    MouseHover,
    ElipsisDirective,
    slicePipe,
    UserComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AppService],
})
export class AppModule {}
