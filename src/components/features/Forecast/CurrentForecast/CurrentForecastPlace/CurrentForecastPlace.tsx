import type { CurrentForecastPlaceProps } from './current-forecast-place.types'
import { getCurrentDate, getWeatherIcon } from '@/utils'
import { styles } from './styles'

export function CurrentForecastPlace({ name, country, temperature_2m, time, weather_code }: CurrentForecastPlaceProps) {
  const weatherIcon = getWeatherIcon(weather_code)

  return (
    <article className={styles.container}>
        <section className={styles.placeSection}>
            <h2 className={styles.place}>{name}, {country}</h2>
            <span className={styles.date}>{ getCurrentDate(time) }</span>
        </section>
        <section className={styles.temperatureSection}>
            <img width={100} src={`/images/icon-${weatherIcon}.webp`} alt="icon"/>    
            <h1 className={styles.temperature}>{temperature_2m.toFixed(0)}°</h1>
        </section>
    </article>
  )
}