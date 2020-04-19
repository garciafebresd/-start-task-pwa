import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskInfoComponent } from './show-task-info/task-info.component';
import { AddTaskInfoComponent } from './add-task-info/add-task-info.component';
import { UpdateTaskInfoComponent } from './update-task-info/update-task-info.component';
import { DeleteTaskInfoComponent } from './delete-task-info/delete-task-info.component';

const routes: Routes = [
  { path: '', component: TaskInfoComponent },
  { path: 'add', component: AddTaskInfoComponent },
  { path: 'delete', component: DeleteTaskInfoComponent },
  { path: 'update', component: UpdateTaskInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskInfoRoutingModule { }
