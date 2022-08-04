import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = 'http://localhost:3000/api/auth'


  constructor(private _httpClient: HttpClient,
    private _router: Router
  ) { }


  signUp(user: User) {
    let endpoint = `${this.URL}/signup`;
    return this._httpClient.post<any>(endpoint, user);
  }


  signIn(user: User) {
    let endpoint = `${this.URL}/signin`;
    return this._httpClient.post<any>(endpoint, user);
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
    return !!(localStorage.getItem('token'));
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
  destroyId(){
    return localStorage.removeItem('id')
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login'])
  }

}
