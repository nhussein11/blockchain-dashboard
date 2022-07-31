import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {



  constructor(private _auth:AuthService) { }


  intercept(req : HttpRequest<any>,next:HttpHandler){
    const tokenizeReq = req.clone({
      setHeaders:{
        Authorization:`Bearer ${this._auth.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }

}
