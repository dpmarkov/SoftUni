import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TimeComponent } from './time/time.component';
import { RouterModule } from '@angular/router';
import { ParamsActivate } from './guards/params.activate';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TimeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ParamsActivate
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
