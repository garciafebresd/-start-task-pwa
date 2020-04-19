import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';

// Components
import { VehiclesComponent } from './show-vehicle/vehicles.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { DeleteVehicleComponent } from './delete-vehicle/delete-vehicle.component';


@NgModule({
  declarations: [
    VehiclesComponent,
    AddVehicleComponent,
    UpdateVehicleComponent,
    DeleteVehicleComponent
  ],
  exports: [
    VehiclesComponent,
    AddVehicleComponent,
    UpdateVehicleComponent,
    DeleteVehicleComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule
  ]
})
export class VehiclesModule { }
