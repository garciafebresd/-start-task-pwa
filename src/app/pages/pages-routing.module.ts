import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { JourneyComponent } from './components/journey/journey.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { MailsComponent } from './config/mails/mails.component';
import { TaskInfoComponent } from './config/task-info/task-info.component';
import { UsersComponent } from './config/users/users.component';
import { VehiclesComponent } from './config/vehicles/vehicles.component';
import { NoPageFoundComponent } from '../shared/no-page-found/no-page-found.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            // app modules
            { path: 'journey', component: JourneyComponent },
            { path: 'tasks', component: TasksComponent },
            // Settings
            { path: 'mails', component: MailsComponent },
            { path: 'taskInfo', component: TaskInfoComponent },
            { path: 'users', component: UsersComponent },
            { path: 'vehicles', component: VehiclesComponent },
            // Default route
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: '**', component: NoPageFoundComponent }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(pagesRoutes)
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

