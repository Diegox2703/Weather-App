import { CurrentForecastSkeleton } from './CurrentForecastSkeleton'
import { DailyForecastSkeleton } from './DailyForecastSkeleton'
import { HourlyForecastSkeleton } from './HourlyForecastSkeleton'
import { styles } from './styles'

export function ForecastSkeleton() {
  return (
    <section className={styles.container}>
        <section className={styles.forecast_main}>
           <CurrentForecastSkeleton/>
           <DailyForecastSkeleton/>
        </section>
        <HourlyForecastSkeleton/>
    </section>
  )
}