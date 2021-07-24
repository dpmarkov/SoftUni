import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';



@NgModule({
  declarations: [
    OneComponent,
    TwoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestModule { }
