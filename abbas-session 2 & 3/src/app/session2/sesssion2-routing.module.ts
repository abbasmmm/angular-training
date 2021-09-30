import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Session2Component } from './session2.component';

const routes: Routes = [{
  path: '',
  component: Session2Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sesssion2RoutingModule { }
