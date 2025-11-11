import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCreateComponent } from './vehicle-create.component';
import { FuelTypeControlModule } from '@app/shared/components/fuel-type-control/fuel-type-control.module';
import { DriverFormModule } from '@app/shared/components/driver-form/driver-form.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('VehicleCreateComponent', () => {
  let component: VehicleCreateComponent;
  let fixture: ComponentFixture<VehicleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleCreateComponent],
      imports: [
        ReactiveFormsModule,
        FuelTypeControlModule,
        DriverFormModule
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(VehicleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
