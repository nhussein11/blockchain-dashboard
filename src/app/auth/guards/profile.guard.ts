import { Injectable } from '@angular/core';
import {  CanActivate, CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, pipe, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate, CanLoad {


  constructor(
    private _router: Router,
    private _auth: AuthService) { }
    
    canActivate(): boolean {
      if (this._auth.loggedIn()){
        console.log(true)
        return true;
      }
      console.log(false)
      
      this._router.navigateByUrl('/login');
      return false;
    }
    
    canLoad(): boolean {
      if(this._auth.loggedIn()){
        return true;
      }
      this._router.navigateByUrl('/login');
      return false;
    }
  

}