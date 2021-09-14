import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { data } from './customers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  currentControl:string ='';

  /**
   *
   */
  constructor() {
    //this.data = data;

  }

  loadDirective(){
    this.currentControl = 'directivecomponent'
  }
  loadCustomer(){
    this.currentControl ='customercomponent'
  }
  loadMarks(){
    this.currentControl = 'marks';
  }
}
