import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this._formBuilder.group({
    username: ['',Validators.required],
    password: ['',Validators.required]
  })


  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }


  login() : void {
    //Backend
    const {username,password} = this.form.value; 

  
  }
}
