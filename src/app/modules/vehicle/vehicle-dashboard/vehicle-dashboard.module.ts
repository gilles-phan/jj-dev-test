import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/components/shared/shared.module';
import { VehicleDashboardComponent } from './vehicle-dashboard.component';
import { VehicleCreateModule } from '../vehicle-create/vehicle-create.module';
import { VehicleListModule } from '../vehicle-list/vehicle-list.module';



@NgModule({
  declarations: [VehicleDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    VehicleCreateModule,
    VehicleListModule
  ],
  exports: [VehicleDashboardComponent],

})
export class VehicleDashboardModule { }
