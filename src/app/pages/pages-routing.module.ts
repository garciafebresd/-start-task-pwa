import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';

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
            {
                path: 'journey',
                loadChildren: () => import('./components/journey/journey.module').then(m => m.JourneyModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'tasks',
                loadChildren: () => import('./components/tasks/tasks.module').then(m => m.TasksModule),
                canActivate: [AuthGuard]
            },
            // Config mail
            {
                path: 'mails',
                loadChildren: () => import('./config/mails/mails.module').then(m => m.MailsModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'vehicles',
                loadChildren: () => import('./config/vehicles/vehicles.module').then(m => m.VehiclesModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'task-info',
                loadChildren: () => import('./config/task-info/task-info.module').then(m => m.TaskInfoModule),
                canActivate: [AuthGuard]
            },
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

