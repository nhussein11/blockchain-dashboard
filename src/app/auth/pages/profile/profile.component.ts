import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { emailPattern } from '../../validation-patterns/validation-patterns';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  

  form: FormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(emailPattern)]],
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  isModifying:boolean=false;
  initialValues:Object={};




  constructor(private _auth: AuthService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    

    const id: string  = this._auth.getId()!;
    this.form.disable();
    this._auth.profile(id).subscribe(
      ({ user } : { user: User }) => {
        
        const { name, email, username, password } = user;

        this.form.controls['name'].setValue(name);
        this.form.controls['email'].setValue(email);
        this.form.controls['username'].setValue(username);
        this.form.controls['password'].setValue(password);
        this.initialValues = this.form.value;
      }
    )
  }


  logout() {
    this._auth.logout();
  }

  modify(){
    if (this.isModifying){
      this.form.disable();
      this.isModifying=false;
    }else{
      this.form.enable();
      this.isModifying=true;
    }
  }

  ngOnDestroy() {
    if (this.initialValues != this.form.value) {
      console.log(this.form.value)
      
        //update changes on db
    }
}
}
