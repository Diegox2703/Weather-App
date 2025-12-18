import { useForecastStore } from '@/store'
import { HourlyForecastItem } from '../HourlyForecastItem'
import type { HourlyForecastListProps } from './hourly-forecast-list.types'
import { styles } from './styles'

export function HourlyForecastList({ hourlyItems, defaultTime }: HourlyForecastListProps) {
  const store = useForecastStore(store => store)
  const filteredHourlyItems = store.filterHourlyItems(hourlyItems, defaultTime)

  return (
    <section className={styles}>
    {
        filteredHourlyItems.map(item => (
        <HourlyForecastItem
            key={item.time}
            {...item}
        />
        ))
    }
    </section>
  )
}
