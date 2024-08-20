// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [],
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.scss'
// })
// export class SignupComponent
//  {
//   signupForm!: FormGroup;
//   constructor(
//     private fb: FormBuilder,
//     private router: Router
//   ) {
//     this.signupForm = this.fb.group({
//       Adminname: ['', [Validators.required, Validators.minLength(3)]],
//       password: '',
//     });
//   }

//   get Adminname() {
//     return this.signupForm.get('Adminname');
//   }

//   signup() {
//     this.adminService.signup(this.signupForm.value).then((data) => {
//       localStorage.setItem('token', data.token);
//       setUser.userEmail = this.signupForm.value.Adminname;

//       this.router.navigate(['/adminprofile']);
//     });
//   }

// }
