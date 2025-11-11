import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListComponent } from './vehicle-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AgGridModule } from 'ag-grid-angular';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleListComponent],
      imports: [
        AgGridModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
