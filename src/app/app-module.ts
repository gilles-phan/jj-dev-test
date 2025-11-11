import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FuelTypeControlModule } from "./shared/components/fuel-type-control/fuel-type-control.module";
import { DriverFormModule } from './shared/components/driver-form/driver-form.module';
import { VehicleListModule } from './modules/vehicle/vehicle-list/vehicle-list.module';
import { VehicleCreateModule } from './modules/vehicle/vehicle-create/vehicle-create.module';
import { VehicleDashboardModule } from './modules/vehicle/vehicle-dashboard/vehicle-dashboard.module';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FuelTypeControlModule,
    DriverFormModule,
    VehicleListModule,
    VehicleCreateModule,
    VehicleDashboardModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
