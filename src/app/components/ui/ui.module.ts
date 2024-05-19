import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    PrimaryButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    PrimaryButtonComponent,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UiModule { }
