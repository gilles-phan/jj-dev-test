import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FuelTypeControlComponent } from './fuel-type-control.component';

describe('FuelTypeControlComponent', () => {
  let component: FuelTypeControlComponent;
  let fixture: ComponentFixture<FuelTypeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuelTypeControlComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FuelTypeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});