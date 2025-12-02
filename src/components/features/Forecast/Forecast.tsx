import { CurrentForecast } from './CurrentForecast'
import { ForecastHeader } from './ForecastHeader'

export function Forecast() {
  return (
    <div className='flex flex-col gap-10'>
      <ForecastHeader/>
      <CurrentForecast/>
    </div>
  )
}
