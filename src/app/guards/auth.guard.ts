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

      // refresh is token expired
      if (this.authService.isTokenExpired()) {

        this.authService.refreshToken().subscribe();

      }
      return true;

    } else {

      this.router.navigateByUrl('/login');
      return false;

    }
  }
}
