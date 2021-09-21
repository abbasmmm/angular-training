import { Component, OnInit } from '@angular/core';
import { MatSnackBar, matSnackBarAnimations } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  custObj: any = {};
  constructor(private route: ActivatedRoute, private customerService: CustomerService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.customerService.find(this.route.snapshot.params.id).subscribe(res => {
      this.custObj = res;
    });
  }

  save() {
    this.customerService.update(this.route.snapshot.params.id, this.custObj).subscribe((res: any) => {
      this.snackbar.open(res.message, 'ok', { duration: 3000 });
      this.router.navigate(['session3/customer']);
    });
  }
}
