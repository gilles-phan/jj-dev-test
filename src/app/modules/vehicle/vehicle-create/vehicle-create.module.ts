import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/components/shared/shared.module';
import { VehicleCreateComponent } from './vehicle-create.component';
import { FuelTypeControlModule } from '@app/shared/components/fuel-type-control/fuel-type-control.module';
import { DriverFormModule } from '@app/shared/components/driver-form/driver-form.module';



@NgModule({
  declarations: [VehicleCreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    FuelTypeControlModule,
    DriverFormModule,
  ],
  exports: [VehicleCreateComponent],

})
export class VehicleCreateModule { }
