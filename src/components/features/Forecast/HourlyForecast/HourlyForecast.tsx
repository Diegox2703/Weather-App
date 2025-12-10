import { DAILY_MENU_ITEMS } from '@/constants'
import { DailyMenu } from './DailyMenu'
import { HourlyForecastItem } from './HourlyForecastItem'
import type { HourlyForecastProps } from './hourly-forecast.types'

export function HourlyForecast({ time, temperature_2m, weather_code }: HourlyForecastProps) {
  return (
    <section className='flex-1 min-w-[280px] sm:min-w-[350px] max-h-[702px] bg-Neutral-800 rounded-md w-full p-5'>
      <section className='flex items-center justify-between mb-5'>
        <h1 className='text-Neutral-0 text-lg font-semibold'>Hourly Forecast</h1>
        <DailyMenu days={DAILY_MENU_ITEMS} placeholder='-' value='wednessday'/>
      </section>
      <section className='flex flex-col gap-3 max-h-[600px] pr-2 overflow-auto custom-scroll'>
        {
          time.map((i, idx) => (
            <HourlyForecastItem
              key={idx}
              time={time[idx]}
              temperature_2m={temperature_2m[idx]}
              weather_code={weather_code[idx]}
            />
          ))
        }
      </section>
    </section>
  )
}