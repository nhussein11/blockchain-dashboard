import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import { emailPattern } from '../../validation-patterns/validation-patterns';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  

  form:FormGroup = this._formBuilder.group({
    email:['',[Validators.required, Validators.pattern(emailPattern)]]
  })

  constructor(private _formBuilder:FormBuilder,
              private _auth : AuthService
    ) { }

  ngOnInit(): void {
  }

  forgotPassowrd():void{
    const {email} = this.form.value;
    this._auth.forgotPassword(email)
        .subscribe(
          res=>{
            console.log(res)
            
          },
          err=>{
            console.log(err)
          }
        )
  }
}
