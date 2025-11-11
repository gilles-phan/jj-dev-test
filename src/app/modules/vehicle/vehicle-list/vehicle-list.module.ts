import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from './vehicle-list.component';
import { SharedModule } from '@app/shared/components/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [VehicleListComponent],
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule
  ],
  exports: [VehicleListComponent],

})
export class VehicleListModule { }
