import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  message: string;

  login(email: string, password: string) {
    this.authService.login(email, password).subscribe(
      res => {
        this.authService.storeJWT(res["result"]["data"]["token"]);
        this.message = "Log in successful";
      },
      error => this.message = error["error"]["error"]["error"]["detail"]
    )
  }

  ngOnInit() {
  }

}
