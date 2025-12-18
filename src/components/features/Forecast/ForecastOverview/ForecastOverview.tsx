import { useForecast } from '@/hooks'
import { CurrentForecast } from '../CurrentForecast'
import { DailyForecast } from '../DailyForecast'
import { HourlyForecast } from '../HourlyForecast'
import { ForecastError, ForecastSkeleton } from '@/components/feedback'
import { styles } from './styles'

export function ForecastOverview() {
  const { forecast, isLoading, isError, refetch } = useForecast()

  if (isLoading) return <ForecastSkeleton/>

  if (isError) return <ForecastError onRetry={refetch}/>

  return (
    <>
        {
            forecast &&
            <section className={styles.container}>
                <section className={styles.forecast_main}>
                    <CurrentForecast 
                        country={forecast.country}
                        name={forecast.name}
                        current={forecast.current}
                        current_units={forecast.current_units}
                    />
                    <DailyForecast dailyItems={ forecast.daily }/>
                </section>
                <HourlyForecast 
                    hourlyItems={forecast.hourly}
                    days={forecast.daily.map(d => d.time)}
                    currentTime={forecast.current.time}
                />
            </section>
        }
    </>
  )
}