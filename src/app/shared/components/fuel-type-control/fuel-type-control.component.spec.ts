import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelTypeControlComponent } from './fuel-type-control.component';

describe('FuelTypeControlComponent', () => {
  let component: FuelTypeControlComponent;
  let fixture: ComponentFixture<FuelTypeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuelTypeControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelTypeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
