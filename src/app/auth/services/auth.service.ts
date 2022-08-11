import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of, Subscription, throwError } from 'rxjs';
import { catchError, delay, map, retry, tap } from 'rxjs/operators';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = 'http://localhost:3000/api/auth';

  helper = new JwtHelperService();
  tokenSubscription = new Subscription();

  constructor(private _httpClient: HttpClient,
    private _router: Router
  ) { }


  signUp(user: User) {
    let endpoint = `${this.URL}/signup`;
    return this._httpClient.post<any>(endpoint, user)
      .pipe(
        tap(({ token }) => {
          const timeout = this.helper.getTokenExpirationDate(token)!.valueOf() - new Date().valueOf();
          this.expirationCounter(timeout);
        }),
        catchError(({ error }) => {
          return throwError(() => error);
        })
      )
      ;
  }


  signIn(user: User) {
    let endpoint = `${this.URL}/signin`;
    return this._httpClient.post<any>(endpoint, user)
      .pipe(
        tap(({ token }) => {
          const timeout = this.helper.getTokenExpirationDate(token)!.valueOf() - new Date().valueOf();
          this.expirationCounter(timeout);
        }),
        catchError(({ error }) => {
          return throwError(() => error);
        })
      );
  }

  profile(userId: string) {
    let endpoint = `${this.URL}/profile/${userId}`;
    return this._httpClient.get<any>(endpoint);
  }
  updateProfile(userId: string, newUser: User) {
    let endpoint = `${this.URL}/profile/${userId}`;
    return this._httpClient.patch<any>(endpoint, newUser);
  }

  forgotPassword(email: string) {
    let endpoint = `${this.URL}/forgot-password`;
    return this._httpClient.post<any>(endpoint, { email });
  }

  loggedIn(): boolean {
    const validToken = this.isTokenExpired();
    return !validToken;
  }

  getToken() {
    return localStorage.getItem('token')
  }
  getId() {
    return localStorage.getItem('id')
  }

  destroyToken() {
    return localStorage.removeItem('token')
  }
  destroyId() {
    return localStorage.removeItem('id')
  }

  logout() {
    localStorage.removeItem('token');
    this.destroyId();
    this._router.navigate(['/login'])
  }

  isTokenExpired() {
    const token = this.getToken();
    const isExpired = this.helper.isTokenExpired(token!)
    if (isExpired) { this.destroyToken(); }
    return isExpired;
  }

  expirationCounter(timeout: any) {
    this.tokenSubscription.unsubscribe();
    this.tokenSubscription = of(null)
      .pipe(delay(timeout))
      .subscribe(() => {
        console.log('EXPIRED!!');
        this.logout();
      });
  }

}
