import type { DailySchema } from '@/schema'
import type { Unarray } from './utils'
import type z from 'zod'

export type DailyForecast = z.infer<typeof DailySchema>

export type DailyForecastItem = Unarray<DailyForecast>