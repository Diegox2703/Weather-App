import { getDay, getWeatherIcon } from '@/utils'
import type { DailyForecastItemProps } from './daily-forecast-item.types'
import { styles } from './styles'

export function DailyForecastItem({
  time, 
  temperature_2m_max,
  temperature_2m_min,
  weather_code
}: DailyForecastItemProps) {
  const weatherIcon = getWeatherIcon(weather_code)

  return (
    <article className={styles.container}>
        <h2 className={styles.day}>{ getDay(time) }</h2>
        <img src={`/images/icon-${weatherIcon}.webp`} alt="weather-icon" width={70}/>
        <section className={styles.tempSection}>
            <p className={styles.maxTemp}>{ temperature_2m_max.toFixed(0) }°</p>
            <p className={styles.minTemp}>{ temperature_2m_min.toFixed(0) }°</p>
        </section>
    </article>
  )
}