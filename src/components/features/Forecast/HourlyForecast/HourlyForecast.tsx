import { DailyMenu } from './DailyMenu'
import { HourlyForecastItem } from './HourlyForecastItem'
import type { HourlyForecastProps } from './hourly-forecast.types'
import { dailyMenuItemsAdapter } from '@/adapters'
import { useForecastStore } from '@/store'

export function HourlyForecast({ hourlyItems, days, currentTime }: HourlyForecastProps) {
  const store = useForecastStore(store => store)
  const defaultTime = new Date(currentTime).toLocaleDateString()
  const filteredHourlyItems = store.filterHourlyItems(hourlyItems, defaultTime)

  return (
    <section className='flex-1 min-w-[280px] sm:min-w-[350px] max-h-[702px] bg-Neutral-800 rounded-md w-full p-5'>
      <section className='flex items-center justify-between mb-5'>
        <h1 className='text-Neutral-0 text-lg font-semibold'>Hourly Forecast</h1>
        <DailyMenu 
          onChange={store.selectDay} 
          days={dailyMenuItemsAdapter(days)} 
          placeholder='-' 
          value={defaultTime}
        />
      </section>
      <section className='flex flex-col gap-3 max-h-[600px] pr-2 overflow-auto custom-scroll'>
        {
          filteredHourlyItems.map(item => (
            <HourlyForecastItem
              key={item.time}
              {...item}
            />
          ))
        }
      </section>
    </section>
  )
}