import type { HourlyForecastItemProps } from './hourly-forecast-item.types'
import { getTime, getWeatherIcon } from '@/utils'
import { styles } from './styles'

export function HourlyForecastItem({ time, temperature_2m, weather_code }: HourlyForecastItemProps) {
  const weatherIcon = getWeatherIcon(weather_code)

  return (
    <article className={styles.container}>
      <section className={styles.timeSection}>
        <img width={40} src={`/images/icon-${weatherIcon}.webp`} alt="weather-icon"/>
        <h2 className={styles.time}>{ getTime(time) }</h2>
      </section>
      <section>
        <span className={styles.temp}>{temperature_2m.toFixed(0)}°</span>
      </section>
    </article>
  )
}