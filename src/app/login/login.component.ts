import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form!: UntypedFormGroup;

  ngOnInit(): void {
      this.form = new FormGroup({
        userName: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required)
      })
    }

    onSubmit(){


    }
}

