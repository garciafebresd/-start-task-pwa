import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {

      return true;

    } else {

      this.router.navigateByUrl('/login');
      return false;

    }
  }

  // canActivate(): boolean {
  //   if (this.jwtService.getUser()) {
  //     if (this.jwtService.isTokenExpired()) {
  //       // Should Redirect Sig-In Page
  //       // or refresh token
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   } else {
  //     this.router.navigateByUrl('/login');
  //     return false;
  //   }
  // }

}
