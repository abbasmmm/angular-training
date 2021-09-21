import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { data } from './customers';

@Component({
  selector: 'app-session2',
  templateUrl: './session2.component.html',
  styleUrls: ['./session2.component.css']
})
export class Session2Component {
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
