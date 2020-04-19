import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskInfoRoutingModule } from './task-info-routing.module';

import { TaskInfoComponent } from './show-task-info/task-info.component';
import { AddTaskInfoComponent } from './add-task-info/add-task-info.component';
import { UpdateTaskInfoComponent } from './update-task-info/update-task-info.component';
import { DeleteTaskInfoComponent } from './delete-task-info/delete-task-info.component';


@NgModule({
  declarations: [
    TaskInfoComponent,
    AddTaskInfoComponent,
    UpdateTaskInfoComponent,
    DeleteTaskInfoComponent
  ],
  exports: [
    TaskInfoComponent,
    AddTaskInfoComponent,
    UpdateTaskInfoComponent,
    DeleteTaskInfoComponent
  ],
  imports: [
    CommonModule,
    TaskInfoRoutingModule
  ]
})
export class TaskInfoModule { }
