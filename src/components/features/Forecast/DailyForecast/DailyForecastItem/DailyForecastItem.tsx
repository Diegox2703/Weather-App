import { getDay } from '@/utils'
import type { DailyForecastItemProps } from './daily-forecast-item.types'
import weatherIcon from '/images/icon-drizzle.webp'

export function DailyForecastItem({
  time, 
  temperature_2m_max,
  temperature_2m_min,
  weather_code
}: DailyForecastItemProps) {
  return (
    <article className='bg-Neutral-800 flex flex-col px-2 py-3 h-44 rounded-md items-center justify-between'>
        <h2 className='text-Neutral-0'>{ getDay(time) }</h2>
        <img src={weatherIcon} alt="weather-icon" width={70}/>
        <section className='flex items-center justify-between w-full'>
            <p className='text-Neutral-0'>{ temperature_2m_max.toFixed(0) }°</p>
            <p className='text-Neutral-300'>{ temperature_2m_min.toFixed(0) }°</p>
        </section>
    </article>
  )
}