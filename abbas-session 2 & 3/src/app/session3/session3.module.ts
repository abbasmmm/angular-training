import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Session3Component } from './session3.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerModule } from './customer/customer.module';
import { MaterialModule } from './material/material.module';

const routes: Routes = [
  {
    path: '',
    component: Session3Component,
    children: [
      { path: 'customer', loadChildren: () => import('./customer/customer.module').then(x => x.CustomerModule) },
      { path: 'material', loadChildren: () => import('./material/material.module').then(x => x.MaterialModule) }]
  }
]

@NgModule({
  declarations: [
    Session3Component
  ],
  imports: [
    CommonModule,
    CustomerModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [Session3Component]
})
export class Session3Module { }
