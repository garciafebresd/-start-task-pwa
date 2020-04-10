import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SharedService,
  SidebarService,
  JourneyService,
  TasksService
} from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SharedService,
    SidebarService,
    JourneyService,
    TasksService
  ]
})
export class ServiceModule { }
