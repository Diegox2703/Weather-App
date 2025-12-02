import { DailyForecastItem } from './DailyForecastItem'

export function DailyForecast() {
  return (
    <section className='mt-10'>
      <h1 className='text-Neutral-0 text-lg font-semibold'>Daily Forecast</h1>
      <section className='mt-3 flex gap-3'>
        <DailyForecastItem/>
        <DailyForecastItem/>
        <DailyForecastItem/>
        <DailyForecastItem/>
        <DailyForecastItem/>
        <DailyForecastItem/>
      </section>
    </section>
  )
}
