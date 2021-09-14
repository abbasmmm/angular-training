import { Component, Input, OnInit } from '@angular/core';

export class ProductData {
  public name:string;
  public price: number;
  public manufacturer: string;
  public imageUrl: string;
  public category: string;
  constructor() {
    this.name = '';
    this.price = 0;
    this.manufacturer = '';
    this.imageUrl = '';
    this.category = '';
  }
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit { 
  @Input() selectedCategory:string|undefined;
  public productDetails:Array<ProductData>;
  public userPrice:number;

  constructor() { 
    this.userPrice = 0;
    this.productDetails = [
        {
          category: 'electronics',
          name: 'Laptop',
          price: 2000,
          manufacturer: 'Samsung',
          imageUrl: 'https://images.indianexpress.com/2020/12/fb1af4ff-d983-42b0-bfdb-3e0edda353b0.jpg'
        },
        {
          category: 'electronics',
          name: 'Mobile',
          price: 1500,
          manufacturer: 'Sony',
          imageUrl: 'https://images.indianexpress.com/2020/12/fb1af4ff-d983-42b0-bfdb-3e0edda353b0.jpg'
        },
        {
          category: 'homeNeeds',
          name: 'Fan',
          price: 900,
          manufacturer: 'Scandrive',
          imageUrl: 'https://images.indianexpress.com/2020/12/fb1af4ff-d983-42b0-bfdb-3e0edda353b0.jpg'
        },
        {
          category: 'book',
          name: 'Book',
          price: 1000,
          manufacturer: 'Philips',
          imageUrl: 'https://images.indianexpress.com/2020/12/fb1af4ff-d983-42b0-bfdb-3e0edda353b0.jpg'
        }
    ];
  }

  ngOnInit(): void {

  }

}
