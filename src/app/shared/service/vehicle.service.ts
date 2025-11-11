import { Injectable } from '@angular/core';
import { Vehicle } from '@app/core/models';
import { BehaviorSubject, delay, map, Observable, of, tap } from 'rxjs';
import { DELAY_MS } from '../utils/constant.utils';



@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private vehiclesSubject = new BehaviorSubject<Array<Vehicle>>([]);

  $vehicles$ = this.vehiclesSubject.asObservable();

  // ------------ //
  // CRUD Vehicle //
  // ------------ //

  /**
   * Add a vehicle.
   *
   * @param vehicle The vehicle to add.
   * @returns An observable of the updated vehicle list.
   */
  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return of(vehicle).pipe(
      delay(DELAY_MS),
      map(v => {
        const updatedList = [...this.vehicles, v];
        this.vehiclesSubject.next(updatedList);
        return v;
      })
    );
  }

  /**
   * Get the current list of vehicles.
   *
   * @returns The current list of vehicles.
   */
  get vehicles(): Array<Vehicle> {
    return this.vehiclesSubject.getValue();
  }

  /**
   * Update a vehicle.
   *
   * @param updatedVehicle The vehicle with updated information.
   * @returns An observable of the updated vehicle.
   */
  updateVehicle(updatedVehicle: Vehicle): Observable<Vehicle> {
    return of(updatedVehicle).pipe(
      delay(DELAY_MS),
      map(v => {
        const updatedList = this.vehicles.map(existingVehicle =>
          existingVehicle.id === v.id ? v : existingVehicle
        );
        this.vehiclesSubject.next(updatedList);
        return v;
      })
    );
  }

  /**
   * Delete a vehicle by its ID.
   *
   * @param vehicleId The ID of the vehicle to delete.
   * @returns An observable of the deleted vehicle's ID.
   */
  deleteVehicle(vehicleId: string): Observable<string> {
    return of(vehicleId).pipe(
      delay(DELAY_MS),
      tap(id => {
        const updatedList = this.vehicles.filter(v => v.id !== id);
        this.vehiclesSubject.next(updatedList);
      })
    );
  }

  /**
   * Clear all vehicles.
   */
  clearAll(): void {
    this.vehiclesSubject.next([]);
  }
}
