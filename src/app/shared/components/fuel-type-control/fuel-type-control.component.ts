import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { FuelType } from '@app/core/enums';

@Component({
  selector: 'app-fuel-type-control',
  standalone: false,
  templateUrl: './fuel-type-control.component.html',
  styleUrl: './fuel-type-control.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FuelTypeControlComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FuelTypeControlComponent),
      multi: true,
    },
  ],
})
export class FuelTypeControlComponent implements ControlValueAccessor, Validator {
  fuelTypes = Object.values(FuelType);
  value: FuelType | null = null;
  onChange = (_: FuelType | null) => { };
  onTouched = () => { };
  disabled = false;

  constructor(private cdr: ChangeDetectorRef) { }

  writeValue(value: FuelType | null): void {
    if (value === null) {
      this.value = null;
    } else {
      this.value = value;
    }

    this.cdr.markForCheck();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.value ? null : { required: true };
  }

  selectFuelType(fuelType: FuelType): void {
    if (this.disabled) {
      return;
    }
    this.value = fuelType;
    this.onChange(this.value);
    this.onTouched();
  }
}