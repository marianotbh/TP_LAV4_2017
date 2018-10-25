import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper: JwtHelperService = new JwtHelperService();
  token: string = localStorage.getItem('token') != null ? localStorage.token : null;

  constructor() { }

  isLoggedIn() {
    if (localStorage.getItem('token') != null) {
      console.log(this.helper.getTokenExpirationDate(this.token));
      return this.helper.isTokenExpired(this.token) ? false : true;
    }
    return false;
  }

  getPayload() {
    if (localStorage.getItem('token') != null) {
      return this.helper.decodeToken(this.token);
    }
    else return null;
  }

  tokenExpired() {
    if (localStorage.getItem('token') != null)
      return this.helper.isTokenExpired(this.token);
  }

  getToken() {
    return this.token;
  }
}
