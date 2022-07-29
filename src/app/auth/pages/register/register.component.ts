import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  signup(): void {
    const {name, email, username, password} = this.form.value;
    console.log(name, email, username, password)
    
  }

}
