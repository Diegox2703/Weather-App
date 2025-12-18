import { dailyMenuItemsAdapter } from '@/adapters'
import { useForecastStore } from '@/store'
import { DailyMenu } from '../DailyMenu'
import type { HourlyForecastMenuProps } from './hourly-forecast-menu.types'
import { styles } from './styles'

export function HourlyForecastMenu({ defaultTime, days }: HourlyForecastMenuProps) {
  const store = useForecastStore(store => store)

  return (
    <section className={styles.container}>
        <h1 className={styles.title}>Hourly Forecast</h1>
        <DailyMenu 
            onChange={store.selectDay} 
            days={dailyMenuItemsAdapter(days)} 
            placeholder='-' 
            value={defaultTime}
        />
    </section>
  )
}