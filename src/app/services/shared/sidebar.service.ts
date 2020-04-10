import { Injectable } from '@angular/core';

interface Menu {
  title: string;
  icon: string;
  url?: string;
  submenu?: SubMenu[];
}

interface SubMenu {
  title: string;
  icon: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: Menu[] = [
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
        { title: 'Mails', icon: 'mdi mdi-email-outline', url: '/mails' },
        { title: 'Moviles', icon: 'mdi mdi-car', url: '/vehicles' },
        { title: 'Tareas-info', icon: 'mdi mdi-label', url: '/taskInfo' },
        { title: 'Usuarios', icon: 'mdi mdi-account-settings', url: '/users' },
      ]
    }
  ];

  constructor() { }
}


