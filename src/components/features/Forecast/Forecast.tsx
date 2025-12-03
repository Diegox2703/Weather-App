import { CurrentForecast } from './CurrentForecast'
import { DailyForecast } from './DailyForecast'
import { ForecastHeader } from './ForecastHeader'
import { HourlyForecast } from './HourlyForecast'

export function Forecast() {
  return (
    <div className='flex flex-col gap-10'>
      <ForecastHeader/>
      <section className='flex flex-wrap gap-10'>
        <section className='flex-2 min-w-[280px] sm:min-w-[400px]'>
          <CurrentForecast/>
          <DailyForecast/>
        </section>
        <HourlyForecast/>
      </section>
    </div>
  )
}