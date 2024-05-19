import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './components/pages/pages.module';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
