import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, Form, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { DriverForm } from '@app/core/models/driver-form.interface';
import { licenseNumberValidator } from '@app/shared/validators/license-number.validator';

@Component({
  selector: 'app-driver-form',
  standalone: false,
  templateUrl: './driver-form.component.html',
  styleUrl: './driver-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DriverFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DriverFormComponent),
      multi: true,
    },
  ],
})
export class DriverFormComponent implements ControlValueAccessor, Validator {
  form: FormGroup<DriverForm>;
  onChange = (_: DriverForm) => { };
  onTouched = () => { };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group<DriverForm>({
      firstName: this.fb.control<string>("", { nonNullable: true, validators: [Validators.required] }),
      lastName: this.fb.control<string>("", { nonNullable: true, validators: [Validators.required] }),
      licenseNumber: this.fb.control<string>("", { nonNullable: true, validators: [Validators.required, licenseNumberValidator] }),
    });
  }
  validate(control: AbstractControl): ValidationErrors | null {
    return this.form.valid ? null : { invalidForm: { valid: false, message: "Driver form is invalid" } }
  }

  writeValue(value: any): void {
    if (value) {
      this.form.setValue({
        firstName: value.firstName,
        lastName: value.lastName,
        licenseNumber: value.licenseNumber,
      }, { emitEvent: false });
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  /**
   * Converts license number input to uppercase on change, to prevent validation errors.
   *
   * @param event 
   */
  onLicenseChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const upper = input.value.toUpperCase();
    this.form.get('licenseNumber')?.setValue(upper, { emitEvent: false });
  }

}
