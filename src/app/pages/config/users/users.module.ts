import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

// Components
import { UsersComponent } from './show-user/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    DeleteUserComponent,
    UpdateUserComponent
  ],
  exports: [
    UsersComponent,
    AddUserComponent,
    DeleteUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
