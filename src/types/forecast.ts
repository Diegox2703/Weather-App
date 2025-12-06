import { CurrentSchema, type CurrentUnitsSchema, type ForecastSchema } from '@/schema'
import type { PlaceDetails } from './place'
import type z from 'zod'

export type ForecastResponse = z.infer<typeof ForecastSchema>

export interface ForecastParams extends Pick<ForecastResponse, 'latitude' | 'longitude'>, Units {}

export interface Forecast extends ForecastResponse, PlaceDetails {}

type CurrentUnits = z.infer<typeof CurrentUnitsSchema>

type Current = z.infer<typeof CurrentSchema>

export interface CurrentForecast extends PlaceDetails, Pick<Forecast, 'current' | 'current_units'> {}

export interface CurrentForecastPlace extends PlaceDetails, Pick<Current, 'time' | 'temperature_2m'> {}

export interface CurrentForecastDetails {
    current: Omit<Current, 'time' | 'temperature_2m'>
    currentUnits: CurrentUnits
}

export interface CurrentForecastDetailsItem {
    section: string
    value: number
    unit: string
}

export interface Units {
    wind_speed_unit: 'kmh' | 'mph'
    temperature_unit: 'celsius' | 'fahrenheit'
    precipitation_unit: 'mm' | 'inch'
}