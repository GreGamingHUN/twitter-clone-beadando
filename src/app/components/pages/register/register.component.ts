import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'register-page',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterPageComponent {
  registerForm: FormGroup;
  constructor(private authService: AuthService) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      displayName: new FormControl('', [Validators.required]),
    });
  }

  register() {
    const { email, password, displayName } = this.registerForm.value;
    this.authService.register(email, password, displayName);
  }
}
