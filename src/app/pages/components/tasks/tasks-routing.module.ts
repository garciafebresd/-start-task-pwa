import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TasksComponent } from './show-tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'add', component: AddTaskComponent },
  { path: 'delete', component: DeleteTaskComponent },
  { path: 'update', component: UpdateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
