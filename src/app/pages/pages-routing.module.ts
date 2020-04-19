import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { JourneyComponent } from './components/journey/journey.component';
import { TasksComponent } from './components/tasks/tasks.component';
// import { TaskInfoComponent } from './config/task-info/task-info.component';
// import { VehiclesComponent } from './config/vehicles/vehicles.component';

// Guards
import { AuthGuard } from '../guards/auth.guard';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
            { path: 'progress', component: ProgressComponent, canActivate: [AuthGuard] },
            // app modules
            { path: 'journey', component: JourneyComponent, canActivate: [AuthGuard] },
            { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
            // Config mail
            {
                path: 'mails',
                loadChildren: () => import('./config/mails/mails.module').then(m => m.MailsModule),
                canActivate: [AuthGuard]
            },
            // { path: 'vehicles', component: VehiclesComponent, canActivate: [AuthGuard] },
            // { path: 'taskInfo', component: TaskInfoComponent, canActivate: [AuthGuard] },
            // Config Users
            {
                path: 'users',
                loadChildren: () => import('./config/users/users.module').then(m => m.UsersModule),
                canActivate: [AuthGuard]
            },
            // Default route
            { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] }
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

