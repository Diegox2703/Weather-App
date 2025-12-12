export type UnitSystem = 'metric' | 'imperial'

export interface MeasurementUnits {
    wind_speed_unit: 'kmh' | 'mph'
    temperature_unit: 'celsius' | 'fahrenheit'
    precipitation_unit: 'mm' | 'inch'
}

export type Units = MeasurementUnits[keyof MeasurementUnits]

export type UnitSection = 'Temperature' | 'Wind Speed' | 'Precipitation'

export interface UnitSettings {
    system: UnitSystem
    units: MeasurementUnits
}
