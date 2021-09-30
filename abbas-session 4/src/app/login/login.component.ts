import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventBusService } from 'src/eventbus.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  constructor(private client: HttpClient, private authService: AuthService, private router: Router, private eventbus: EventBusService) { }

  ngOnInit(): void {
  }

  login() {
    this.client.post('http://localhost:3000/auth/login', {
      "username": this.username,
      "password": this.password
    }).subscribe(x => {
      // this.authService.setUserData(x);
      this.eventbus.sendEvent({ name: 'Login', value: x })
      this.router.navigate([this.authService.prevUrl]);
    });
  }
}
