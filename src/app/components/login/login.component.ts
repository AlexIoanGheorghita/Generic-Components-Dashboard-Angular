import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { LoginError } from 'src/app/shared/auth/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: LoginError | null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null, [Validators.minLength(8), Validators.required])
    });

    this.authService.loginError.subscribe(error => {
      this.errorMessage = error;
    })
  }

  login(credentials: { email: string, password: string }): void {
    this.authService.login(credentials);
  }

  onSubmit(): void {
    console.log(this.loginForm);
  }
}
