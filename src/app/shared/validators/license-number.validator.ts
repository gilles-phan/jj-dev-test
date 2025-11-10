import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * Validates that the license number matches the pattern: two uppercase letters followed by eleven digits.
 *
 * @param control The form control containing the license number to validate.
 * @returns A ValidationErrors object if the license number is invalid, or null if it is valid.
 */
export const licenseNumberValidator = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;
  if (!value) return null;

  const licenseNumberRegex = /^[A-Z]{2}\d{11}$/;

  return licenseNumberRegex.test(value) ? null : { invalidLicenseNumber: true };
}