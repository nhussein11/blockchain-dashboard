import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private _auth: AuthService,
    private _localService : LocalService
    ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const idToken = this._localService.getData('token');

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + idToken)
      })
      
      return next.handle(cloned);
    } 
    else {
      return next.handle(req);
    }

  }
}
