import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {
  setData(dataSource: any) {
    this.customerDat = dataSource;
  }

  getData()
  {
    return this.customerDat;
  }

  getDataOf(id:any)
  {
    return this.customerDat.filter(x=> x.id == id)[0];
  }

  private customerDat: any[];
  constructor() { }


}
