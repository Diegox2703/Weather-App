import type { HourlyForecastItemProps } from './hourly-forecast-item.types'
import { getTime, getWeatherIcon } from '@/utils'

export function HourlyForecastItem({ time, temperature_2m, weather_code }: HourlyForecastItemProps) {
  const weatherIcon = getWeatherIcon(weather_code)

  return (
    <article className='flex items-center justify-between bg-Neutral-700 rounded-md h-14 pr-4 pl-2 border border-Neutral-600'>
      <section className='flex items-center gap-1'>
        <img width={40} src={`/images/icon-${weatherIcon}.webp`} alt="weather-icon"/>
        <h2 className='text-Neutral-0 font-medium'>{ getTime(time) }</h2>
      </section>
      <section>
        <span className='text-Neutral-0'>{temperature_2m.toFixed(0)}°</span>
      </section>
    </article>
  )
}
