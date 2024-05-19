import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginPageComponent {
  loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).then(() => {
      this.router.navigate(['/']);
    });
  }
}
