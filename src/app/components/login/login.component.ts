import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string;
  password: string;

  constructor(private authorizationService: AuthorizationService, private snackBar: MatSnackBar) {
  }

  signIn() {
    try {
      this.authorizationService.authorize(this.login, this.password);
    } catch (e) {
      this.snackBar.open((<Error>e).message, 'Error', {duration: 1000});
    }
  }
}
