import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = 'http://localhost:3000/api/auth'

  constructor(private _httpClient: HttpClient) { }


  signUp(user:User) {
    let endpoint = `${this.URL}/signup`;
    return this._httpClient.post<any>(endpoint,user);
  }


  signIn(user:User) {
    let endpoint = `${this.URL}/signin`;
    return this._httpClient.post<any>(endpoint,user);
  }

  forgotPassword(email:string){
    let endpoint = `${this.URL}/forgot-password`;
    return this._httpClient.post<any>(endpoint,{email});
  }

}
