import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm!: FormGroup;
  users: { userName: string; password: string; confirmpassword: string }[] = []; // Array to store users
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private loginService: LoginService
  ) {
    this.signupForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.signupForm.valid) {
      const { userName, password, confirmpassword } = this.signupForm.value;
      // this.users.push({ userName, password }); // Store the user credentials
      console.log('Stored Users:', this.users);
      this.loginService.createUser(this.signupForm.value);
      // Handle login logic here (e.g., authentication)
      this.route.navigate(['/excercises']);
    }
  }
  get userName() {
    return this.signupForm.get('userName');
  }
  get password() {
    return this.signupForm.get('password');
  }

  get confirmpassword() {
    return this.signupForm.get('confirmpassword');
  }
}
