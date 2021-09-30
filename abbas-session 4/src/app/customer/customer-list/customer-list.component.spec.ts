import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';
import { CustomerService } from '../customer.service';

import { CustomerListComponent } from './customer-list.component';
const customerData = [{ "id": 1, "email": "isidro_von@hotmail.com", "first": "Torrey", "last": "Veum", "company": "Hilll, Mayert and Wolf", "created_at": "2014-12-25T04:06:27.981Z", "country": "Switzerland" }, { "id": 2, "email": "frederique19@gmail.com", "first": "Micah", "last": "Sanford", "company": "Stokes-Reichel", "created_at": "2014-07-03T16:08:17.044Z", "country": "Democratic People's Republic of Korea" }, { "id": 3, "email": "fredy54@gmail.com", "first": "Hollis", "last": "Swift", "company": "Rodriguez, Cartwright and Kuhn", "created_at": "2014-08-18T06:15:16.731Z", "country": "Tunisia" }, { "id": 4, "email": "braxton29@hotmail.com", "first": "Perry", "last": "Leffler", "company": "Sipes, Feeney and Hansen", "created_at": "2014-07-10T11:31:40.235Z", "country": "Chad" }];
describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let debugElement : DebugElement;
  let fixture: ComponentFixture<CustomerListComponent>;
  let customerService: CustomerService;
  let getAllSpy: jasmine.Spy;
  let deleteSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerListComponent],
      imports: [HttpClientModule, MaterialModule, BrowserAnimationsModule]
    })
      .compileComponents();

    customerService = TestBed.get(CustomerService);
    getAllSpy = spyOn(customerService, 'getAll').and.returnValue(of(customerData));
    deleteSpy = spyOn(customerService, 'delete').and.returnValue(of({ "status": "success", "message": "Record has been deleted successfully!!" }));

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    debugElement =fixture.debugElement;
    fixture.detectChanges();
  });

 it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('should load data', () => {
    expect(component.dataSource.length).toBe(4);
    expect(getAllSpy).toHaveBeenCalledTimes(1);
  });

 it('should delete customer', () => {
    component.delete(2);
    expect(deleteSpy).toHaveBeenCalled();
    expect(deleteSpy).toHaveBeenCalledWith(2);
    expect(getAllSpy).toHaveBeenCalledTimes(2);
  });

 it('test', () => {
    expect(2+3).toBe(5);
    expect(component.sum(2,3)).toBe(5);
  })

 it('should delete customer (UI)', () => {
    let elem = debugElement.nativeElement.querySelector('#btnDelete4');
    expect(elem).toBeTruthy();
    elem.click();

    expect(deleteSpy).toHaveBeenCalled();
    expect(deleteSpy).toHaveBeenCalledWith(4);
    expect(getAllSpy).toHaveBeenCalledTimes(2);
  });

});
