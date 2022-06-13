import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({});

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {

    this.loginForm = this.fb.group ({

      email: ['',
          [
            Validators.required,Validators.email,
            Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
          ]
        ],

      password: ['',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{5,10}$'
          )
        ]
      ],

      rememberMe: ['']
    })

  }

  login() {

    if (this.loginForm.valid) {
      console.log('Ok');
    }
    else{
      console.log('No valido');
    }

  }

}
