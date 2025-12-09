import type { DailyForecastProps } from './daily-forecast.types'
import { DailyForecastItem } from './DailyForecastItem'

export function DailyForecast({ 
  time, 
  temperature_2m_max, 
  temperature_2m_min, 
  weather_code 
}: DailyForecastProps) {
  return (
    <section className='mt-12 w-full'>
      <h1 className='text-Neutral-0 text-lg font-semibold'>Daily Forecast</h1>
      <section className='mt-3 grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-3'>
        {
          time.map((item, idx) => (
            <DailyForecastItem
              key={idx}
              time={time[idx]}
              temperature_2m_max={temperature_2m_max[idx]}
              temperature_2m_min={temperature_2m_min[idx]}
              weather_code={weather_code[idx]}
            />
          ))
        }
      </section>
    </section>
  )
}
