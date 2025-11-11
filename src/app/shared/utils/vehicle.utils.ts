import { FuelType } from "@app/core/enums";
import { Vehicle } from "@app/core/models";

/**
 * Find vehicles by search term.
 *
 * @param term The search term.
 * @returns A function that checks if a vehicle matches the term.
 */
export const findByTerm = (term: string) => (v: Vehicle) => {
    const formatedTerm = term.toLowerCase();
    const searchAttribute = [v.brand, v.model, v.year?.toString()];
    return searchAttribute.some(attribute => attribute.toLowerCase().includes(formatedTerm));
}

export const generateMockVehicle = (): Vehicle => {
    const id = (Math.round((Math.random() * 1000))).toString();
    return {
        id,
        licensePlate: getRandomLicensePlate(),
        brand: 'Tesla',
        model: 'Model S',
        year: 2021,
        fuelType: FuelType.ELECTRIC
    } as Vehicle;
}

const getRandomLicensePlate = (): string => {
    return `AB-${Math.round(Math.random() * 1000)}-ZZ`;
}