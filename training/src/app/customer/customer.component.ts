import { Component, OnInit } from '@angular/core';
import { data } from '../customers';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  data : any;
  constructor() { 
    this.data = data
  }

  ngOnInit(): void {
  }

}
