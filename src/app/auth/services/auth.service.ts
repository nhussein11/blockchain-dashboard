import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = 'http://localhost:3000/api/auth';

  helper = new JwtHelperService();


  constructor(private _httpClient: HttpClient,
    private _router: Router
  ) { }


  signUp(user: User) {
    let endpoint = `${this.URL}/signup`;
    return this._httpClient.post<any>(endpoint, user);
  }


  signIn(user: User) {
    let endpoint = `${this.URL}/signin`;
    return this._httpClient.post<User>(endpoint, user)
      .pipe(
        catchError( ({error}) => { 
          return  throwError(() => error);
        } )
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
    const token = localStorage.getItem('token') 
    const isExpired = this.helper.isTokenExpired(token!)
    return !isExpired;
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
    this._router.navigate(['/login'])
  }

}
