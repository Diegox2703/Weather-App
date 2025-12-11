import type { CurrentTime, Hourly, Place, Units } from '@/types'

export interface UseForecastStore {
    place: Place 
    units: Units
    selectedDay: string | undefined
    selectPlace: (place: Place) => void
    selectDay: (value: string) => void
    filterHourlyItems: (hourlyItems: Hourly, currentTime: CurrentTime) => Hourly
}