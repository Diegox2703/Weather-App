import type { CurrentForecastProps } from './current-forecast.types'
import { CurrentForecastDetails } from './CurrentForecastDetails'
import { CurrentForecastPlace } from './CurrentForecastPlace'

export function CurrentForecast({ country, name, current, current_units }: CurrentForecastProps) {
  const { 
    apparent_temperature,
    precipitation,
    relative_humidity_2m,
    temperature_2m,
    time,
    wind_speed_10m
   } = current

  return (
    <section className='flex flex-col gap-8 w-full'>
      <CurrentForecastPlace
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