import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');

    // console.log('Paso por el interceptor');
    // console.log(req);


    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    req = req.clone({
      headers
    });


    // console.log('Despues se setear el token');
    // console.log(req);


    // if (token !== '') {
    //   req = req.clone({
    //     url: req.url,
    //     setHeaders: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   });
    // }
    return next.handle(req);
  }
}
