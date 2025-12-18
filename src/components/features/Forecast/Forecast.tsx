import { ForecastSearch } from './ForecastSearch'
import { ForecastOverview } from './ForecastOverview'
import { styles } from './styles'

export function Forecast() {
  return (
    <div className={styles}>
      <ForecastSearch/>
      <ForecastOverview/>
    </div>
  )
}