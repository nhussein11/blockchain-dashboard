import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';

import { emailPattern } from '../../validation-patterns/validation-patterns';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  form: FormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(emailPattern)]],
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private _formBuilder: FormBuilder, private _auth:AuthService) { }

  ngOnInit(): void {
  }

  signup(): void {
    const { name, email, username, password } = this.form.value;
    // console.log(name, email, username, password)
    const user: User = {
      name,
      email,
      username,
      password
    }

    this._auth.signUp(user)
      .subscribe(
        res =>{
          console.log(res)
          
        },
        err=>{
          console.log(err)
          
        }

      )
    ;
  }

}
