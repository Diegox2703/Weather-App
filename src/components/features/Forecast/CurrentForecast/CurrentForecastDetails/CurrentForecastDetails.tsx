import { CurrentForecastDetailsItem } from '../CurrentForecastDetailsItem'
import type { CurrentForecastDetailsProps } from './current-forecast-details.types'

export function CurrentForecastDetails({ current, currentUnits }: CurrentForecastDetailsProps) {
  return (
    <section className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5'>
        <CurrentForecastDetailsItem 
          section='Feels Like'
          unit='°'
          value={current.apparent_temperature}
        />
        <CurrentForecastDetailsItem 
          section='Humidity'
          unit={currentUnits.relative_humidity_2m}
          value={current.relative_humidity_2m}
        />
        <CurrentForecastDetailsItem 
          section='Wind'
          unit={currentUnits.wind_speed_10m}
          value={current.wind_speed_10m}
        />
        <CurrentForecastDetailsItem 
          section='Precipitation'
          unit={currentUnits.precipitation}
          value={current.precipitation}
        />
    </section>
  )
}