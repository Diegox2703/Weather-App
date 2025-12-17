import { useForecastStore } from '@/store'
import { HourlyForecastItem } from '../HourlyForecastItem'
import type { HourlyForecastListProps } from './hourly-forecast-list.types'

export function HourlyForecastList({ hourlyItems, defaultTime }: HourlyForecastListProps) {
  const store = useForecastStore(store => store)
  const filteredHourlyItems = store.filterHourlyItems(hourlyItems, defaultTime)

  return (
    <section className='flex flex-col gap-3 max-h-[600px] pr-2 overflow-auto custom-scroll'>
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
