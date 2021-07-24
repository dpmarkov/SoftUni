import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';

export const myStringInjectionToken = new InjectionToken('myString');
export const myStringInjectionToken2 = new InjectionToken('myString2');

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: myStringInjectionToken,
      useValue: 'Hello World!'
    },
    {
      provide: myStringInjectionToken2,
      useValue: 'Hello World 2!'
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }