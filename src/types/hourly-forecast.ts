import type { HourlySchema } from '@/schema'
import type { DailyForecastTime } from './daily-forecast'
import type { CurrentTime } from './current-forecast'
import type z from 'zod'

export type Hourly = z.infer<typeof HourlySchema>

export type HourlyItem = Hourly[number]

export interface HourlyForecast {
    hourlyItems: Hourly
    days: DailyForecastTime
    currentTime: CurrentTime
}

export type HourlyForecastItem = HourlyItem