import type { HourlySchema } from '@/schema'
import type z from 'zod'
import type { Unarray } from './utils'

export type HourlyForecast = z.infer<typeof HourlySchema>

export type HourlyForecastItem = Unarray<HourlyForecast>