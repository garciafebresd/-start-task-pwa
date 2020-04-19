import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';

import { TasksComponent } from './show-tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';


@NgModule({
  declarations: [
    TasksComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    DeleteTaskComponent
  ],
  exports: [
    TasksComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    DeleteTaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
