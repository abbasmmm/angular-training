import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Session2Component } from '../session2/session2.component';
import { Session2Module } from '../session2/session2.module';
import { Session3Component } from '../session3/session3.component';
import { Session3Module } from '../session3/session3.module';

const routes: Routes = [
  { path: 'session2', loadChildren: ()=> import('../session2/session2.module').then(x=> x.Session2Module) },
  { path: 'session3', loadChildren: ()=> import('../session3/session3.module').then(x=> x.Session3Module) },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }


