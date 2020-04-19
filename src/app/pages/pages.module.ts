import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';

//Modules
import { OlMapsModule } from '../ol-maps/ol-maps.module';
import { SharedModule } from '../shared/shared.module';

//Components
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
    ],
    exports: [
        PagesComponent,
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
