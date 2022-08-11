import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    this._auth.isTokenExpired();
    const idToken = this._auth.getToken();

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
