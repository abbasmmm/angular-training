import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get('http://localhost:3000/customers');
  }

  delete(id: number) {
    return this.httpClient.delete('http://localhost:3000/customers/' + id);
  }

  find(id: number) {
    return this.httpClient.get('http://localhost:3000/customers/' + id);
  }

  update(id: any, custObj: any) {
    return this.httpClient.put('http://localhost:3000/customers/' + id, custObj);
  }

}
