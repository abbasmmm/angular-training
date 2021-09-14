import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OnlineShopping';
  public userSelectedCategory:string;
  constructor() {
    this.userSelectedCategory = '';
  }
}
