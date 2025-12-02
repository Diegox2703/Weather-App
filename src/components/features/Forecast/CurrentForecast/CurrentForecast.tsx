import { CurrentWeather } from './CurrentWeather'
import { WeatherDetails } from './WeatherDetails'

export function CurrentForecast() {
  return (
    <section className='flex flex-col gap-8 w-[800px]'>
      <CurrentWeather/>
      <section className='flex gap-5'>
        <WeatherDetails/>
        <WeatherDetails/>
        <WeatherDetails/>
        <WeatherDetails/>
      </section>
    </section>
  )
}