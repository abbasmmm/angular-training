import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ForbiddenValidatorDirective } from '../forbiddenvalidator';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: 'list', component: CustomerListComponent },
  { path: 'edit/:id', component: CustomerEditComponent }
]

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerEditComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [CustomerListComponent]
})
export class CustomerModule { }
