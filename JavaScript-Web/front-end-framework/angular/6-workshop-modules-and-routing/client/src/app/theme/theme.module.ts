import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { AsideComponent } from './aside/aside.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ThemeComponent,
    ThemesComponent,
    NewThemeComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeRoutingModule
  ]
})
export class ThemeModule { }
