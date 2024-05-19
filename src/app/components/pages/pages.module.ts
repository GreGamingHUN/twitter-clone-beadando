import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login/login.component';
import { UiModule } from '../ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './register/register.component';
import { AuthGuard } from '../../auth/auth.guard';
import { AccountPageComponent } from './account/account.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterPageComponent, canActivate: [AuthGuard] },
  // other routes...
];

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    AccountPageComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UiModule,
    LoginPageComponent
  ]
})
export class PagesModule { }
