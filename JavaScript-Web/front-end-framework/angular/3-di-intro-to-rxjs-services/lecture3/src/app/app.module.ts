import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserService } from './user.service';

export const myStringInjectionToken = new InjectionToken('myString');
export const myStringInjectionToken2 = new InjectionToken('myString2');

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserListComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule
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
