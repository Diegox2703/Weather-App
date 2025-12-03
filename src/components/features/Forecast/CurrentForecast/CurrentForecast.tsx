import { CurrentWeather } from './CurrentWeather'
import { WeatherDetails } from './WeatherDetails'

export function CurrentForecast() {
  return (
    <section className='flex flex-col gap-8 w-full'>
      <CurrentWeather/>
      <section className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5'>
        <WeatherDetails/>
        <WeatherDetails/>
        <WeatherDetails/>
        <WeatherDetails/>
      </section>
    </section>
  )
}