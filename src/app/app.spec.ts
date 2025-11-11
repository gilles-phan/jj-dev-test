import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { FuelTypeControlModule } from './shared/components/fuel-type-control/fuel-type-control.module';
import { DriverFormModule } from './shared/components/driver-form/driver-form.module';
import { VehicleListModule } from './modules/vehicle/vehicle-list/vehicle-list.module';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        FuelTypeControlModule,
        DriverFormModule,
        VehicleListModule,
      ],
      declarations: [
        App
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
