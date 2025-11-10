import { FormControl } from "@angular/forms";

export interface DriverForm {
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    licenseNumber: FormControl<string>;
}