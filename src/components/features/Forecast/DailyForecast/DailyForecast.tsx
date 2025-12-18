import type { DailyForecastProps } from './daily-forecast.types'
import { DailyForecastItem } from './DailyForecastItem'
import { styles } from './styles'

export function DailyForecast({ dailyItems }: DailyForecastProps) {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Daily Forecast</h1>
      <section className={styles.dailyItemsSection}>
        {
          dailyItems.map(item => (
            <DailyForecastItem
              key={item.time}
              {...item}
            />
          ))
        }
      </section>
    </section>
  )
}
