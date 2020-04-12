import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { UserModel } from '../../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.BASE_URL;
  private token: string;

  constructor(private http: HttpClient) {
    this.getToken();
  }

  //CREAR USUARIO
  login(usuario: UserModel) {

    const dataLogin = {
      username: usuario.email,
      password: usuario.password,
      grant_type: environment.GRANT_TYPE,
      client_id: environment.CLIENT_ID,
      client_secret: environment.CLIENT_SECRET,
      scope: environment.SCOPE,
      provider: environment.PROVIDER,
    };

    const requestUrl = `${this.url}/oauth/token`;

    return this.requestPost(requestUrl, dataLogin);
  }

  //LOGIN USUARIO
  register(usuario: UserModel) {
    const dataRegister = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    const requestUrl = `${this.url}signUp?key=`;

    return this.requestPost(requestUrl, dataRegister);
  }


  logout() {
    localStorage.removeItem('token');
    this.token = '';
  }

  isAuthenticated(): boolean {

    if (this.token.length < 2) {
      return false;
    }

    const expiresIn = Number(localStorage.getItem('expiresIn'));
    const expired = new Date();
    expired.setTime(expiresIn);
    const now = new Date();

    if (expired > now) {
      return true;
    } else {
      return false;
    }

  }


  private setToken(tokenObject: AuthResponse) {

    this.token = tokenObject.access_token;
    localStorage.setItem('token', tokenObject.access_token);
    localStorage.setItem('refreshToken', tokenObject.refresh_token);

    const today = new Date();
    today.setSeconds(tokenObject.expires_in);
    localStorage.setItem('expiresIn', today.getTime().toString());

  }

  private getToken() {

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }

    return this.token;

  }

  requestPost(requestUrl: string, objectData: any) {

    return this.http.post(requestUrl, objectData)
      .pipe(
        map((response: AuthResponse) => {

          this.setToken(response);
          return response;

        })
      );

  }

}

interface AuthResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

