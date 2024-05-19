import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login/login.component';
import { UiModule } from '../ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './register/register.component';
import { AuthGuard } from '../../auth/auth.guard';
import { AccountPageComponent } from './account/account.component';
import { HomePageComponent } from './home/home.component';
import { NewPostPageComponent } from './new-post/new-post-page.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { DatumPipe } from '../../pipes/datum.pipe';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccountPageComponent, canActivate: [AuthGuard] },
  { path: 'new-post', component: NewPostPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    AccountPageComponent,
    HomePageComponent,
    NewPostPageComponent,
    DatumPipe
  ],
  imports: [
    CommonModule,
    UiModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [
    UiModule,
    LoginPageComponent,
  ]
})
export class PagesModule { }
