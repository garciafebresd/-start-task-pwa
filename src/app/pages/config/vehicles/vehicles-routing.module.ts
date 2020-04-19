import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
// Components
import { VehiclesComponent } from './show-vehicle/vehicles.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { DeleteVehicleComponent } from './delete-vehicle/delete-vehicle.component';


const routes: Routes = [
  { path: '', component: VehiclesComponent },
  { path: 'add', component: AddVehicleComponent },
  { path: 'delete', component: DeleteVehicleComponent },
  { path: 'update', component: UpdateVehicleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
