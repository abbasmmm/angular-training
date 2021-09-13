import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveExamapleComponent } from './directive-examaple/directive-examaple.component';
import { CustomerComponent } from './customer/customer.component';
import { MarksComponent } from './marks/marks.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    DirectiveExamapleComponent,
    CustomerComponent,
    MarksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
