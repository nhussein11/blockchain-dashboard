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
    username: ['nico', Validators.required],
    password: ['123', Validators.required]
  })

  userErrorMessage: string = '';
  passwordErrorMessage: string = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }


  login(): void {
    const { username, password } = this.form.value;
    const user: User = { username, password };
    this._auth.signIn(user)
      .subscribe({
        next: () => {
          this._router.navigate(['/profile']);
        },
        error: (err) => {
          if(err.message.split(' ')[0] == 'Username'){
            this.userErrorMessage = err.message
          }
          else if (err.message.split(' ')[0] == 'Password'){
            this.passwordErrorMessage = err.message
          }
        }
      });
  }
}
