import type { DailyForecastTime, DropdownMenuItem } from '@/types'
import { DAYS } from '@/constants'

export const dailyMenuItemsAdapter = (days: DailyForecastTime): DropdownMenuItem[] => (
    days.map(d => {
        const [ year, month, day ] = d.split('-').map(Number)
        const date = new Date(year, month - 1, day)
        return { value: date.toLocaleDateString(), label: DAYS[date.getDay()] }
    })
)