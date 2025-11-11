import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/components/shared/shared.module';
import { VehicleCreateComponent } from './vehicle-create.component';



@NgModule({
  declarations: [VehicleCreateComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [VehicleCreateComponent],

})
export class VehicleCreateModule { }
