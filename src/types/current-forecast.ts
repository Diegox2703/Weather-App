import type { CurrentSchema, CurrentUnitsSchema } from '@/schema'
import type { PlaceDetails } from './place'
import type { Forecast } from './forecast'
import type z from 'zod'

type CurrentUnits = z.infer<typeof CurrentUnitsSchema>

export type Current = z.infer<typeof CurrentSchema>

export interface CurrentForecast extends PlaceDetails, Pick<Forecast, 'current' | 'current_units'> {}

export interface CurrentForecastPlace extends PlaceDetails, Pick<Current, 'time' | 'temperature_2m'| 'weather_code'> {}

export interface CurrentForecastDetails {
    current: Omit<Current, 'time' | 'temperature_2m' | 'weather_code'>
    currentUnits: CurrentUnits
}

export interface CurrentForecastDetailsItem {
    section: string
    value: number
    unit: string
}

export type CurrentTime = Current['time']