import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })


  constructor(
    private _formBuilder: FormBuilder,
    private _auth: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }


  login(): void {
    //Backend
    const { username, password } = this.form.value;
    const user: User = { username, password };
    this._auth.signIn(user)
    .subscribe(
      res =>{
        localStorage.setItem('token',res.token)
        this.router.navigate(['/profile']);
      },
      err=>{
        console.log(err)
      }
    )
    
    
    ;
  }
}
