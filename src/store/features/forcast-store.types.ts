import type { CurrentTime, Hourly, MeasurementUnits, Place, Units, UnitSection, UnitSystem } from '@/types'

export interface ForecastStore {
    place: Place 
    unitSystem: UnitSystem
    units: MeasurementUnits
    selectedDay: string | undefined
    selectPlace: (place: Place) => void
    selectDay: (value: string) => void
    filterHourlyItems: (hourlyItems: Hourly, currentTime: CurrentTime) => Hourly
    handleUnits: () => void
    handleSelectedUnit: (section: UnitSection) => Units 
}