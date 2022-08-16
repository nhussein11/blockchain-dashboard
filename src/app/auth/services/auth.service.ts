import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { of, pipe, Subscription, throwError } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { LocalService } from 'src/app/services/local.service';
import { AuthResponse } from '../models/AuthResponse';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = 'http://localhost:3000/api/auth';

  helper = new JwtHelperService();
  tokenSubscription = new Subscription();

  constructor(
    private _httpClient: HttpClient,
    private _router: Router,
    private _localService: LocalService
  ) { }


  signUp(user: User) {
    let endpoint = `${this.URL}/signup`;
    return this._httpClient.post<AuthResponse>(endpoint, user)
      .pipe(this.handleTokenExpirationAndError());
  }

  signIn(user: User) {
    let endpoint = `${this.URL}/signin`;
    return this._httpClient.post<AuthResponse>(endpoint, user)
      .pipe(this.handleTokenExpirationAndError());
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

  logout() {
    this._localService.removeData('token');
    this._localService.removeData('id');
    this._router.navigate(['/login'])
  }

  //Helper methods
  private expirationCounter(timeout: number) {
    this.tokenSubscription.unsubscribe();
    this.tokenSubscription = of(null)
      .pipe(delay(timeout))
      .subscribe(() => {
        console.log('EXPIRED!!');
        this.logout();
      });
  }

  private handleTokenExpirationAndError() {
    return pipe(
      tap({
        next: (Authresponse: AuthResponse) => {
          const { id, token } = Authresponse;
          this._localService.saveData('id',id);
          this._localService.saveData('token',token);

          const timeout = this.helper.getTokenExpirationDate(token)!.valueOf() - new Date().valueOf();
          this.expirationCounter(timeout);
        }
      }),
      catchError(({ error }) => {
        return throwError(() => error);
      })
    )
  }

}
