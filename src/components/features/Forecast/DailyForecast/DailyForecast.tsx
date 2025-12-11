import type { DailyForecastProps } from './daily-forecast.types'
import { DailyForecastItem } from './DailyForecastItem'

export function DailyForecast({ dailyItems }: DailyForecastProps) {
  return (
    <section className='mt-12 w-full'>
      <h1 className='text-Neutral-0 text-lg font-semibold'>Daily Forecast</h1>
      <section className='mt-3 grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-3'>
        {
          dailyItems.map(item => (
            <DailyForecastItem
              key={item.time}
              {...item}
            />
          ))
        }
      </section>
    </section>
  )
}
