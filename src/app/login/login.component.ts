import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserModel } from '../models/user.model';
import { AuthService } from '../services/auth/auth.service';
import Swal from 'sweetalert2';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UserModel;
  remember = false;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {

    init_plugins();

    this.usuario = new UserModel();

    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.remember = true;
    }
  }

  login(formRegistro: NgForm) {

    if (formRegistro.invalid) { return; }

    console.log('usuario', this.usuario);


    Swal.fire({
      title: 'Cargando',
      text: 'Espere por favor',
      icon: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.authService.login(this.usuario).subscribe(response => {

      Swal.close();

      if (this.remember) {
        localStorage.setItem('email', this.usuario.email);
      }

      this.router.navigateByUrl('/');

    }, (err) => {
      console.log(err);

      Swal.fire({
        title: 'Error al autenticar',
        text: 'Email o password invalidos',
        icon: 'error'
      });
    });
  }

}
