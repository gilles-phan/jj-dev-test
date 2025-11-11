import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDashboardComponent } from './vehicle-dashboard.component';
import { VehicleListModule } from '../vehicle-list/vehicle-list.module';
import { VehicleCreateModule } from '../vehicle-create/vehicle-create.module';

describe('VehicleDashboardComponent', () => {
  let component: VehicleDashboardComponent;
  let fixture: ComponentFixture<VehicleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleDashboardComponent],
      imports: [
        VehicleCreateModule,
        VehicleListModule,
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(VehicleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
