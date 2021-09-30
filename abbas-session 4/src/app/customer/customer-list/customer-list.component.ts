import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerDataService } from '../customer-data.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  isLoading = false;
  dataSource: any = []
  displayedColumns = ["id", "email", "first", "last", "company", "country", "actions"]
  constructor(private customerService: CustomerService, private snackbar: MatSnackBar, private dataservice: CustomerDataService) { }

  ngOnInit(): void {
    this.loadTable();
  }

  private loadTable() {
    this.isLoading = true;
    console.log('1')
    this.customerService.getAll().subscribe(res => {
      console.log('2')
      this.dataSource = res;
      this.dataservice.setData(this.dataSource)
      this.isLoading = false;
    });
    console.log('3')
    console.log('4')
  }

  delete(id: number) {
    this.customerService.delete(id).subscribe((res: any) => {
      this.snackbar.open(res.message, 'ok', { duration: 3000 });
      this.loadTable();
    })
  }

  sum(v1: number, v2: number) {
    return v1 + v2;
  }

}
