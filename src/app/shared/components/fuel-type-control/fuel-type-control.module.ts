import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelTypeControlComponent } from './fuel-type-control.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FuelTypeControlComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [FuelTypeControlComponent],

})
export class FuelTypeControlModule { }
