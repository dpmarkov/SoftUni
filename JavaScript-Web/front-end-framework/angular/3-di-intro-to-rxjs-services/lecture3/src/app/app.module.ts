import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { TimeComponent } from './time/time.component';

export const myStringInjectionToken = new InjectionToken('myString');
export const myStringInjectionToken2 = new InjectionToken('myString2');

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListItemComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: myStringInjectionToken,
      useValue: 'Hello World!'
    },
    {
      provide: myStringInjectionToken2,
      useValue: 'Hello World 2!'
    }, 
    UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }
