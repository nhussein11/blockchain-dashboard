import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { emailPattern } from '../../validation-patterns/validation-patterns';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  form: FormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(emailPattern)]],
    username: ['', Validators.required],
    password: ['        ', Validators.required]
  })

  isModifying: boolean = false;
  initialValues: Object = {};
  labelModifyorSave: string = 'Modify'




  constructor(private _auth: AuthService, 
    private _formBuilder: FormBuilder,
    private _router:Router) { }

  ngOnInit(): void {



    const id: string = this._auth.getId()!;
    this.form.disable();
    this._auth.profile(id).subscribe(
      ({ user }: { user: User }) => {

        const { name, email, username, password } = user;

        this.form.controls['name'].setValue(name);
        this.form.controls['email'].setValue(email);
        this.form.controls['username'].setValue(username);
        // this.form.controls['password'].setValue(password);
        this.initialValues = this.form.value;
      }
    )
  }



  modify() {
    if (this.isModifying) {
      this.labelModifyorSave = 'Modify';
      this.form.disable();
      this.isModifying = false;
      this.saveUpdatedUser();
    } else {
      this.labelModifyorSave = 'Save';
      this.form.enable();
      this.isModifying = true;

    }
  }

  saveUpdatedUser() {
    const id: string = this._auth.getId()!;
    const user: User = this.form.value
    this._auth.updateProfile(id, user).subscribe()
  }

  logout(){
    this._auth.destroyToken();
    this._auth.destroyId();
    this._router.navigate(['/login']);
  }
}
