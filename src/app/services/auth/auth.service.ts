import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { UserModel } from '../../models/user.model';
import { environment } from '../../../environments/environment';

interface AuthResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

interface RequestTokenData {
  grant_type: string;
  client_id: number;
  client_secret: string;
  scope: string;
  provider: string;
  username?: string;
  password?: string;
  refresh_token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.BASE_URL;
  private token: string;

  constructor(private http: HttpClient) {
    this.getToken();
  }

  login(usuario: UserModel) {

    const dataLogin = this.setRequestTokenData();
    dataLogin.username = usuario.email;
    dataLogin.password = usuario.password;

    const requestUrl = `${this.url}/oauth/token`;

    return this.requestPost(requestUrl, dataLogin);
  }

  refreshToken() {

    const refreshToken = this.getItem('refreshToken');
    const dataRefresh = this.setRequestTokenData();
    dataRefresh.refresh_token = refreshToken;
    dataRefresh.grant_type = 'refresh_token';

    const requestUrl = `${this.url}/oauth/token`;

    return this.requestPost(requestUrl, dataRefresh);
  }

  setRequestTokenData(): RequestTokenData {
    return {
      grant_type: environment.GRANT_TYPE,
      client_id: environment.CLIENT_ID,
      client_secret: environment.CLIENT_SECRET,
      scope: environment.SCOPE,
      provider: environment.PROVIDER
    };
  }

  logout(): void {
    this.clearLocalStorageItems();
    this.token = '';
  }

  isAuthenticated(): boolean {

    if (this.token === '') {
      return false;
    }

    const expired = this.isTokenExpired();
    if (expired) {
      return false;
    }

    return true;
  }

  isTokenExpired(): boolean {

    const expiresIn = this.getItem('expiresIn');
    if (!expiresIn) {
      return true;
    }

    const expiresInTime = Number(expiresIn);
    const expired = new Date();
    expired.setTime(expiresInTime);
    const now = new Date();

    if (expired > now) {
      return false;
    } else {
      return true;
    }
  }

  private setToken(tokenObject: AuthResponse): void {

    this.token = tokenObject.access_token;
    this.setItem('token', tokenObject.access_token);
    this.setItem('refreshToken', tokenObject.refresh_token);

    const today = new Date();
    today.setSeconds(tokenObject.expires_in);
    this.setItem('expiresIn', today.getTime().toString());

  }

  getToken(): string {

    if (this.getItem('token')) {
      this.token = this.getItem('token');
    } else {
      this.token = '';
    }

    return this.token;

  }

  // TODO:  user register to make works
  register(usuario: UserModel) { }

  requestPost(requestUrl: string, objectData: any) {

    return this.http.post(requestUrl, objectData)
      .pipe(
        map((response: AuthResponse) => {

          this.setToken(response);
          return response;

        })
      );

  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): string {
    return localStorage.getItem(key);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearLocalStorageItems(): void {
    localStorage.clear();
  }

}

