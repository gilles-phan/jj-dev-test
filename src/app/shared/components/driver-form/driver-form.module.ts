import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DriverFormComponent } from './driver-form.component';

@NgModule({
  declarations: [DriverFormComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DriverFormComponent],

})
export class DriverFormModule { }
