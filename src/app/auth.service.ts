import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post("https://me-api.chau17.me/user/login", { email, password });
  }

  storeJWT(token) {
    localStorage.setItem("token", token);
    const expiresAt = moment().add(60, 'minutes');
    localStorage.setItem("expires", JSON.stringify(expiresAt.valueOf()));
  }

  public isLoggedIn() {
    const expiration = localStorage.getItem("expires");
    const expiresAt = JSON.parse(expiration);
    return moment().isBefore(moment(expiresAt));
  }
}
