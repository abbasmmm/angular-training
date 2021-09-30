import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = 'http://localhost:3000/customers-secure/';
  constructor(private httpClient: HttpClient, private authService: AuthService) { }  

  getAll() {
    return this.httpClient.get(this.baseUrl);
  }

  delete(id: number) {
    return this.httpClient.delete(this.baseUrl + id);
  }

  find(id: number) {
    return this.httpClient.get(this.baseUrl + id);
  }

  update(id: any, custObj: any) {
    return this.httpClient.put(this.baseUrl + id, custObj);
  }

}
