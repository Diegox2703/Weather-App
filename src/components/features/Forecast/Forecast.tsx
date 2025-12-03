import { CurrentForecast } from './CurrentForecast'
import { DailyForecast } from './DailyForecast'
import { ForecastHeader } from './ForecastHeader'
import { HourlyForecast } from './HourlyForecast'

export function Forecast() {
  return (
    <div className='flex flex-col gap-10'>
      <ForecastHeader/>
      <section className='flex gap-10'>
        <section>
          <CurrentForecast/>
          <DailyForecast/>
        </section>
        <HourlyForecast/>
      </section>
    </div>
  )
}