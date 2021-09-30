import { JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventBusService } from 'src/eventbus.service';

const routeRoleMappings = {
  "/customer": ["admin", "normaluser"],
  "/admin": ["admin"]
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  prevUrl = '';

  constructor(private eventBus: EventBusService) {
    this.eventBus.on('Login', (x: any) => {
      console.log(x);
      this.setUserData(x)
    })
  }

  userData() {
    let info = sessionStorage.getItem('userinfo');
    if (info) {
      return JSON.parse(info);
    }
    return null
  }

  logout() {
    sessionStorage.removeItem('userinfo');
  }

  setUserData(x: any) {
    sessionStorage.setItem('userinfo', JSON.stringify(x));
  }

  getAuthKey() {
    let data = this.userData();
    if (data)
      return data.token;
    return ''
  }

  getUserRoles() {
    if (this.userData())
      return this.userData().roles;
    else
      return [];
  }

  isAuthorized(url: string) {
    console.log(url);

    let rolesForUrl = this.getRolesForUrl(url);

    if (rolesForUrl.length > 0) {
      for (let i = 0; i < rolesForUrl.length; i++) {
        const role = rolesForUrl[i];
        if (this.getUserRoles().indexOf(role) != -1) {
          return true;
        }
      }
      return false;
    }
    else {
      return true;
    }
  }

  getRolesForUrl(route: string): string[] {

    let urls = Object.keys(routeRoleMappings);

    for (let index = 0; index < urls.length; index++) {
      const url = urls[index];
      if (route.startsWith(url)) {
        return (routeRoleMappings as any)[url];
      }
    }
    return [];
  }
}
