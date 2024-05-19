import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login/login.component';
import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    FormsModule
  ],
  exports: [
    UiModule
  ]
})
export class PagesModule { }
