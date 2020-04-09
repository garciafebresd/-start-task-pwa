import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { SignupComponent } from './signup/signup.component';

// import { PagesComponent } from './pages/pages.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// import { MailsComponent } from './pages/config/mails/mails.component';
// import { TaskInfoComponent } from './pages/config/task-info/task-info.component';
// import { UsersComponent } from './pages/config/users/users.component';
// import { VehiclesComponent } from './pages/config/vehicles/vehicles.component';
// import { JourneyComponent } from './pages/components/journey/journey.component';
// import { TasksComponent } from './pages/components/tasks/tasks.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: PagesComponent,
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: 'progress', component: ProgressComponent },
  //     //app modules
  //     { path: 'journey', component: JourneyComponent },
  //     { path: 'tasks', component: TasksComponent },
  //     //Settings
  //     { path: 'mails', component: MailsComponent },
  //     { path: 'taskInfo', component: TaskInfoComponent },
  //     { path: 'users', component: UsersComponent },
  //     { path: 'vehicles', component: VehiclesComponent },
  //     //Default route
  //     { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  //   ]
  // },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
