import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventBusService } from 'src/eventbus.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session4';
  userName:string='Guest';

  constructor(private router: Router, private authService: AuthService, private eventBus: EventBusService) { 
    this.eventBus.on('Login', (x: any) => this.userName = x.name)
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
