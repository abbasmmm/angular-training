import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: 'edit/:id', component: CustomerEditComponent },
]

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerEditComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap : [CustomerListComponent]
})
export class CustomerModule { }
