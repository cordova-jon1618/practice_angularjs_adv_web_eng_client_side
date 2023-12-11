import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginRequest } from './login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form!: UntypedFormGroup;
  // form!: FormGroup;

  constructor(protected authService: AuthService) {}

  ngOnInit(): void {
      this.form = new FormGroup({
        userName: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required)
      })
    }

    onSubmit(){
      let loginRequest: LoginRequest = {
        userName: this.form.controls['userName'].value,
        password: this.form.controls['password'].value
      };
      this.authService.login(loginRequest).subscribe({
        next: result => {
          console.log(result.message);
        }, 
        error: error => {
          console.log(error);
        }
      })

    }
}

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AuthService } from './auth.service';
// import { LoginRequest } from './login-request';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   form!: FormGroup;

//   constructor(protected authService: AuthService) {}

//   ngOnInit(): void {
//     this.form = new FormGroup({
//       userName: new FormControl("", Validators.required),
//       password: new FormControl("", Validators.required)
//     });
//   }

//   onSubmit() {
//     if (this.form.valid) {
//       let loginRequest: LoginRequest = {
//         userName: this.form.controls['userName'].value,
//         password: this.form.controls['password'].value
//       };
//       this.authService.login(loginRequest).subscribe({
//         next: result => {
//           console.log(result.message);
//         }, 
//         error: error => {
//           console.error('Login error:', error);
//           // Handle error for user feedback
//         }
//       });
//     } else {
//       // Handle invalid form case
//     }
//   }
// }
