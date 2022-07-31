import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  constructor(private _formBuilder: FormBuilder,
    private _auth: AuthService
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

        // this._localService.saveData('token', res.token);
        localStorage.setItem('token',res.token)
        console.log('log')
        
      },
      err=>{
        console.log(err)
      }
    )
    
    
    ;
  }
}
