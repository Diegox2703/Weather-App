import { HourlyForecastList } from './HourlyForecastList'
import { HourlyForecastMenu } from './HourlyForecastMenu'
import type { HourlyForecastProps } from './hourly-forecast.types'
import { styles } from './styles'

export function HourlyForecast({ hourlyItems, days, currentTime }: HourlyForecastProps) {
  const defaultTime = new Date(currentTime).toLocaleDateString()

  return (
    <section className={styles}>
      <HourlyForecastMenu days={days} defaultTime={defaultTime}/>
      <HourlyForecastList hourlyItems={hourlyItems} defaultTime={defaultTime}/>
    </section>
  )
}