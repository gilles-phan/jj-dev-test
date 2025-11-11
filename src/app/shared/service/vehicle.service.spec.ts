import { TestBed } from '@angular/core/testing';
import { VehicleService } from './vehicle.service';
import { Vehicle } from '@app/core/models';
import { fakeAsync, tick } from '@angular/core/testing';
import { DELAY_MS } from '../utils/constant.utils';

describe('VehicleService', () => {
  let service: VehicleService;

  const mockVehicle1: Vehicle = { id: '1', brand: 'Tesla', model: 'Model S' } as Vehicle;
  const mockVehicle2: Vehicle = { id: '2', brand: 'BMW', model: 'i4' } as Vehicle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleService);
  });

  afterEach(() => {
    service.clearAll();
  });

  it('✅ should be created', () => {
    expect(service).toBeTruthy();
  });

  it('✅ should add a vehicle', fakeAsync(() => {
    let result: Vehicle | undefined;

    service.addVehicle(mockVehicle1).subscribe(v => (result = v));
    expect(result).toBeUndefined();

    tick(DELAY_MS);

    expect(result).toEqual(mockVehicle1);
    expect(service.vehicles.length).toBe(1);
    expect(service.vehicles[0]).toEqual(mockVehicle1);
  }));

  it('✅ should update a vehicle', fakeAsync(() => {
    service.addVehicle(mockVehicle1).subscribe();

    tick(DELAY_MS);

    const updatedVehicle = { ...mockVehicle1, brand: 'Tesla Updated' };

    let result: Vehicle | undefined;
    service.updateVehicle(updatedVehicle).subscribe(v => (result = v));
    tick(DELAY_MS);

    expect(result).toEqual(updatedVehicle);
    expect(service.vehicles[0].brand).toBe('Tesla Updated');
  }));

  it('✅ should delete a vehicle by ID', fakeAsync(() => {
    service.addVehicle(mockVehicle1).subscribe();
    service.addVehicle(mockVehicle2).subscribe();

    tick(DELAY_MS * 2);

    let deletedId: string | undefined;
    service.deleteVehicle(mockVehicle1.id).subscribe(id => (deletedId = id));
    tick(DELAY_MS);

    expect(deletedId).toBe(mockVehicle1.id);
    expect(service.vehicles.length).toBe(1);
    expect(service.vehicles[0].id).toBe(mockVehicle2.id);
  }));

  it('✅ should clear all vehicles', fakeAsync(() => {
    service.addVehicle(mockVehicle1).subscribe();
    service.addVehicle(mockVehicle2).subscribe();
    tick(DELAY_MS * 2);

    expect(service.vehicles.length).toBe(2);

    service.clearAll();

    expect(service.vehicles.length).toBe(0);
  }));

  it('✅ should emit changes through vehicles$', fakeAsync(() => {
    const emitted: Vehicle[][] = [];

    const sub = service.vehicles$.subscribe(list => emitted.push(list));

    service.addVehicle(mockVehicle1).subscribe();
    service.addVehicle(mockVehicle2).subscribe();

    tick(DELAY_MS * 2);

    expect(emitted.length).toBeGreaterThan(1);
    expect(emitted.at(-1)?.length).toBe(2);

    sub.unsubscribe();
  }));
});