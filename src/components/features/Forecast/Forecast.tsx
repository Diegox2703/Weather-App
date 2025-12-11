import { CurrentForecast } from './CurrentForecast'
import { DailyForecast } from './DailyForecast'
import { ForecastHeader } from './ForecastHeader'
import { HourlyForecast } from './HourlyForecast'
import { useForecast } from '@/hooks'

export function Forecast() {
  const { forecast } = useForecast()

  return (
    <div className='flex flex-col gap-10'>
      <ForecastHeader/>
      {
        forecast &&
        <section className='flex flex-wrap gap-10'>
          <section className='flex-2 min-w-[280px] sm:min-w-[400px]'>
            <CurrentForecast 
              country={forecast.country}
              name={forecast.name}
              current={forecast.current}
              current_units={forecast.current_units}
            />
            <DailyForecast dailyItems={ forecast.daily }/>
          </section>
          <HourlyForecast 
            hourlyItems={forecast.hourly}
            days={forecast.daily.map(d => d.time)}
            currentTime={forecast.current.time}
          />
        </section>
      }
    </div>
  )
}