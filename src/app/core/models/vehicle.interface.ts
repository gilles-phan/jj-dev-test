import { Driver } from "./driver.interface";
import { FuelType } from "../enums/fuel-type.enum";

export interface Vehicle {
    id: string;
    licensePlate: string;
    brand: string;
    model: string;
    year: number;
    fuelType: FuelType;
    capacity: number;
    isActive: boolean;
    driver?: Driver;
    maintenanceDate?: Date;
}