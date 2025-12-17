import { HourlyForecastList } from './HourlyForecastList'
import { HourlyForecastMenu } from './HourlyForecastMenu'
import type { HourlyForecastProps } from './hourly-forecast.types'

export function HourlyForecast({ hourlyItems, days, currentTime }: HourlyForecastProps) {
  const defaultTime = new Date(currentTime).toLocaleDateString()

  return (
    <section className='flex-1 min-w-[280px] sm:min-w-[350px] max-h-[702px] bg-Neutral-800 rounded-md w-full p-5'>
      <HourlyForecastMenu days={days} defaultTime={defaultTime}/>
      <HourlyForecastList hourlyItems={hourlyItems} defaultTime={defaultTime}/>
    </section>
  )
}