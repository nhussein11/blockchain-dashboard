import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {


  constructor(
    private router: Router,
    private _auth: AuthService) { }

  canActivate(): boolean {
    if (this._auth.loggedIn()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}