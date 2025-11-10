import { AbstractControl, ValidationErrors } from '@angular/forms';
import { licenseNumberValidator } from './license-number.validator';

describe('licenseNumberValidator', () => {
  const buildControl = (value: any): AbstractControl =>
    ({ value } as AbstractControl);

  it('✅ should return null when the value is empty', () => {
    expect(licenseNumberValidator(buildControl(''))).toBeNull();
    expect(licenseNumberValidator(buildControl(null))).toBeNull();
    expect(licenseNumberValidator(buildControl(undefined))).toBeNull();
  });

  it('✅ should return null for a valid license number', () => {
    const valid = 'AB12345678901';
    const result = licenseNumberValidator(buildControl(valid));
    expect(result).toBeNull();
  });

  it('❌ should return an error if the value has less than 13 characters', () => {
    const invalid = 'AB123';
    const result = licenseNumberValidator(buildControl(invalid));
    expect(result).toEqual({ invalidLicenseNumber: true });
  });

  it('❌ should return an error if the value has more than 13 characters', () => {
    const invalid = 'AB1234567890123';
    const result = licenseNumberValidator(buildControl(invalid));
    expect(result).toEqual({ invalidLicenseNumber: true });
  });

  it('❌ should return an error if it does not start with 2 letters', () => {
    const invalid = '1A12345678901';
    const result = licenseNumberValidator(buildControl(invalid));
    expect(result).toEqual({ invalidLicenseNumber: true });
  });

  it('❌ should return an error if it contains lowercase letters', () => {
    const invalid = 'ab12345678901';
    const result = licenseNumberValidator(buildControl(invalid));
    expect(result).toEqual({ invalidLicenseNumber: true });
  });

  it('❌ should return an error if it contains special characters', () => {
    const invalid = 'AB12345A78901';
    const result = licenseNumberValidator(buildControl(invalid));
    expect(result).toEqual({ invalidLicenseNumber: true });
  });

  it('❌ should return an error if it contains spaces', () => {
    const invalid = 'AB12345 78901';
    const result = licenseNumberValidator(buildControl(invalid));
    expect(result).toEqual({ invalidLicenseNumber: true });
  });

  it('✅ should accept multiple valid license numbers', () => {
    const validNumbers = ['ZZ00000000000', 'AA99999999999', 'XY12345678901'];
    for (const value of validNumbers) {
      expect(licenseNumberValidator(buildControl(value))).toBeNull();
    }
  });
});