import type { CurrentForecastProps } from './current-forecast.types'
import { CurrentForecastDetails } from './CurrentForecastDetails'
import { CurrentForecastPlace } from './CurrentForecastPlace'
import { styles } from './styles'

export function CurrentForecast({ country, name, current, current_units }: CurrentForecastProps) {
  const { 
    apparent_temperature,
    precipitation,
    relative_humidity_2m,
    temperature_2m,
    time,
    wind_speed_10m,
    weather_code
   } = current

  return (
    <section className={styles}>
      <CurrentForecastPlace
        weather_code={weather_code}
        country={country} 
        name={name} 
        temperature_2m={temperature_2m} 
        time={time}   
      />
      <CurrentForecastDetails
        current={{apparent_temperature, precipitation, relative_humidity_2m, wind_speed_10m}}
        currentUnits={current_units}
      />
    </section>
  )
}