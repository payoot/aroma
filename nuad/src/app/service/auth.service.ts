import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'http://127.0.0.1:3000/api/register';
  private _signinUrl = 'http://127.0.0.1:3000/api/login';
  constructor(private http: HttpClient,private _router: Router) { }
  registerUer(user) {
    return this.http.post<any>(this._registerUrl, user);

  }

  signinUser(user) {
    return this.http.post<any>(this._signinUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
  
  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('type')
    this._router.navigate(['/home'])
  }
  getToken() {
    return localStorage.getItem('token')
  }
}
