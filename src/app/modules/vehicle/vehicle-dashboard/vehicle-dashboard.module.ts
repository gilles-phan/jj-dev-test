import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/components/shared/shared.module';
import { VehicleDashboardComponent } from './vehicle-dashboard.component';



@NgModule({
  declarations: [VehicleDashboardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [VehicleDashboardComponent],

})
export class VehicleDashboardModule { }
