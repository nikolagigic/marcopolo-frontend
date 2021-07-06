import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "http://localhost:3000/api/login"

  constructor(private http: HttpClient, private _router: Router) { }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  loginUser(user: {email: any, password: any}) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
}
