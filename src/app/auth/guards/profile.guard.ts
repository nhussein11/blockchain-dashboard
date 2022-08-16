import { Injectable } from '@angular/core';
import {  CanActivate, CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, pipe, tap } from 'rxjs';
import { LocalService } from 'src/app/services/local.service';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate, CanLoad {


  constructor(
    private _router: Router,
    private _localService : LocalService
    ) { }
    
    canActivate(): boolean {
      if (this._localService.getData('token')){
        return true;
      }      
      this._router.navigateByUrl('/login');
      return false;
    }
    
    canLoad(): boolean {
      if(this._localService.getData('token')){
        return true;
      }
      this._router.navigateByUrl('/login');
      return false;
    }
  

}