import { CurrentForecast } from './CurrentForecast'
import { DailyForecast } from './DailyForecast'
import { ForecastHeader } from './ForecastHeader'

export function Forecast() {
  return (
    <div className='flex flex-col gap-10'>
      <ForecastHeader/>
      <section className='flex'>
        <section>
          <CurrentForecast/>
          <DailyForecast/>
        </section>
      </section>
    </div>
  )
}