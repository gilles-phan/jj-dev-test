import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuelType } from '@app/core/enums';
import { VehicleService } from '@app/shared/service/vehicle.service';
import { generateMockVehicle } from '@app/shared/utils/vehicle.utils';

@Component({
  selector: 'app-vehicle-create',
  standalone: false,
  templateUrl: './vehicle-create.component.html',
  styleUrl: './vehicle-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleCreateComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private vehicleService: VehicleService) {
    this.form = this.fb.group({
      licensePlate: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: [null, [Validators.required, Validators.min(1900)]],
      fuelType: [null, Validators.required], // CVA 1
      driver: [null, Validators.required],   // CVA 2
    });
  }

  onSubmit() {
    const mockVehicle = generateMockVehicle();

    this.form.patchValue({
      licensePlate: mockVehicle.licensePlate,
      brand: mockVehicle.brand,
      model: mockVehicle.model,
      year: mockVehicle.year
    });

    if (this.form.invalid) {
      console.log(this.form);

      this.form.markAllAsTouched();
      return;
    }

    const newVehicle = {
      id: (Math.round((Math.random() * 100000))),
      ...this.form.value,
      isActive: true,
    };
    this.vehicleService.addVehicle(newVehicle).subscribe(() => {
      console.log('✅ Véhicule ajouté');
      this.form.reset();
    });
  }
}
