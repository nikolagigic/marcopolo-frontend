import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: {email: any, password: any} = {
    email: "",
    password: ""
  }

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/products'])
      },
      (err: any) => console.log(err)
    ) 
  }

}