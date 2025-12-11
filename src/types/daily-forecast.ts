import type { DailySchema } from '@/schema'
import type z from 'zod'

export type DailyForecast = z.infer<typeof DailySchema>

export type DailyForecastItem = DailyForecast[number]

export type DailyForecastTime = DailyForecastItem['time'][]