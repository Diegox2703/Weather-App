import type { ForecastSchema } from '@/schema'
import type { PlaceDetails } from './place'
import type { MeasurementUnits } from './units'
import type z from 'zod'

export type ForecastResponse = z.infer<typeof ForecastSchema>

export interface ForecastParams extends Pick<ForecastResponse, 'latitude' | 'longitude'>, MeasurementUnits {}

export interface Forecast extends ForecastResponse, PlaceDetails {}

export type WeatherIcons = 'sunny' | 'partly-cloudy' | 'overcast' | 'fog' | 'drizzle' | 'rain' | 'snow' | 'storm'