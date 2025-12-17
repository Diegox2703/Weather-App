import { dailyMenuItemsAdapter } from '@/adapters'
import { useForecastStore } from '@/store'
import { DailyMenu } from '../DailyMenu'
import type { HourlyForecastMenuProps } from './hourly-forecast-menu.types'

export function HourlyForecastMenu({ defaultTime, days }: HourlyForecastMenuProps) {
  const store = useForecastStore(store => store)

  return (
    <section className='flex items-center justify-between mb-5'>
        <h1 className='text-Neutral-0 text-lg font-semibold'>Hourly Forecast</h1>
        <DailyMenu 
            onChange={store.selectDay} 
            days={dailyMenuItemsAdapter(days)} 
            placeholder='-' 
            value={defaultTime}
        />
    </section>
  )
}