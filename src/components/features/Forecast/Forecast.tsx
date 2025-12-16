import { ForecastSearch } from './ForecastSearch'
import { ForecastOverview } from './ForecastOverview'

export function Forecast() {
  return (
    <div className='flex flex-col gap-10'>
      <ForecastSearch/>
      <ForecastOverview/>
    </div>
  )
}