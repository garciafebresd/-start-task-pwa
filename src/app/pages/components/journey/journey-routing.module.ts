import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourneyComponent } from './show-journey/journey.component';
import { AddJourneyComponent } from './add-journey/add-journey.component';
import { UpdateJourneyComponent } from './update-journey/update-journey.component';
import { DeleteJourneyComponent } from './delete-journey/delete-journey.component';

const routes: Routes = [
  { path: '', component: JourneyComponent },
  { path: 'add', component: AddJourneyComponent },
  { path: 'delete', component: DeleteJourneyComponent },
  { path: 'update', component: UpdateJourneyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JourneyRoutingModule { }
