import type { ForecastSchema } from '@/schema'
import type { PlaceDetails } from './place'
import type z from 'zod'

export type ForecastResponse = z.infer<typeof ForecastSchema>

export interface ForecastParams extends Pick<ForecastResponse, 'latitude' | 'longitude'>, Units {}

export interface Forecast extends ForecastResponse, PlaceDetails {}

export interface Units {
    wind_speed_unit: 'kmh' | 'mph'
    temperature_unit: 'celsius' | 'fahrenheit'
    precipitation_unit: 'mm' | 'inch'
}

export type WeatherIcons = 'sunny' | 'partly-cloudy' | 'overcast' | 'fog' | 'drizzle' | 'rain' | 'snow' | 'storm'