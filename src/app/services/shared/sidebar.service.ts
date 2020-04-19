import { Injectable } from '@angular/core';

// Models
import { MenuModel } from '../../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: MenuModel[] = [
    {
      title: 'Home',
      icon: 'mdi mdi-home',
      url: '/',
      submenu: []
    },
    {
      title: 'Jornada',
      icon: 'mdi mdi-cellphone',
      url: '',
      submenu: [
        { title: 'Asignar', icon: 'mdi mdi-cellphone', url: '/journey' },
        { title: 'Tareas', icon: 'mdi mdi-apps', url: '/tasks' },
      ]
    },
    {
      title: 'Configuración',
      icon: 'mdi mdi-settings',
      url: '',
      submenu: [
        { title: 'Emails', icon: 'mdi mdi-email-outline', url: '/emails' },
        { title: 'Vehículos', icon: 'mdi mdi-car', url: '/vehicles' },
        { title: 'Tareas-info', icon: 'mdi mdi-label', url: '/task-info' },
        { title: 'Usuarios', icon: 'mdi mdi-account-settings', url: '/users' },
      ]
    }
  ];

  constructor() { }
}


