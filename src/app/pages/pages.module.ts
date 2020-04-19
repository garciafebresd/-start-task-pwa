import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';

//Modules
import { OlMapsModule } from '../ol-maps/ol-maps.module';
import { SharedModule } from '../shared/shared.module';

//Components
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { JourneyComponent } from './components/journey/journey.component';
import { ProgressComponent } from './progress/progress.component';
import { MailsComponent } from './config/mails/mails.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskInfoComponent } from './config/task-info/task-info.component';
import { VehiclesComponent } from './config/vehicles/vehicles.component';

@NgModule({
    declarations: [
        PagesComponent,
        MailsComponent,
        VehiclesComponent,
        TaskInfoComponent,
        JourneyComponent,
        TasksComponent,
        DashboardComponent,
        ProgressComponent,
    ],
    exports: [
        PagesComponent,
        MailsComponent,
        VehiclesComponent,
        TaskInfoComponent,
        JourneyComponent,
        TasksComponent,
        DashboardComponent,
        ProgressComponent
    ],
    imports: [
        OlMapsModule,
        SharedModule,
        PagesRoutingModule,
    ],
    providers: [],
})
export class PagesModule { }
