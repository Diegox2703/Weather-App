import { DAYS } from '@/constants'
import { DailyMenu } from './DailyMenu'
import { HourlyForecastItem } from './HourlyForecastItem'

export function HourlyForecast() {
  return (
    <section className='bg-Neutral-800 rounded-md w-full p-5'>
      <section className='flex items-center justify-between mb-5'>
        <h1 className='text-Neutral-0 text-lg font-semibold'>Hourly Forecast</h1>
        <DailyMenu days={DAYS} placeholder='-' value='wednessday'/>
      </section>
      <section className='flex flex-col gap-3'>
        <HourlyForecastItem/>
        <HourlyForecastItem/>
        <HourlyForecastItem/>
        <HourlyForecastItem/>
        <HourlyForecastItem/>
        <HourlyForecastItem/>
      </section>
    </section>
  )
}