import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DbzPageComponent } from './dbz-page/dbz-page.component';

const routes: Routes = [
  { path: '/', component: DbzPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
