import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JourneyRoutingModule } from './journey-routing.module';

import { JourneyComponent } from './show-journey/journey.component';
import { AddJourneyComponent } from './add-journey/add-journey.component';
import { UpdateJourneyComponent } from './update-journey/update-journey.component';
import { DeleteJourneyComponent } from './delete-journey/delete-journey.component';


@NgModule({
  declarations: [
    JourneyComponent,
    AddJourneyComponent,
    UpdateJourneyComponent,
    DeleteJourneyComponent
  ],
  exports: [
    JourneyComponent,
    AddJourneyComponent,
    UpdateJourneyComponent,
    DeleteJourneyComponent
  ],
  imports: [
    CommonModule,
    JourneyRoutingModule
  ]
})
export class JourneyModule { }
