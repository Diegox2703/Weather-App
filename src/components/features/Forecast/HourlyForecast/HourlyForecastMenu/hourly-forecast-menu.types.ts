import type { CurrentTime, DailyForecastTime } from '@/types'

export interface HourlyForecastMenuProps {
    defaultTime: CurrentTime
    days: DailyForecastTime
}