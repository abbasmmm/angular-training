import { NgModule } from '@angular/core';

import { Sesssion2RoutingModule } from './sesssion2-routing.module';
import { Session2Component } from './session2.component';
import { DirectiveExamapleComponent } from './directive-examaple/directive-examaple.component';
import { CustomerComponent } from './customer/customer.component';
import { MarksComponent } from './marks/marks.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    Session2Component,
    DirectiveExamapleComponent,
    CustomerComponent,
    MarksComponent,
  ],
  imports: [
    Sesssion2RoutingModule,
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [Session2Component]
})
export class Session2Module { }
