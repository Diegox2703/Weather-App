import type { Place, Units } from "@/types";

export interface UseForecastStore {
    place: Place 
    selectPlace: (place: Place) => void
    units: Units
}