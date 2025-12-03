import { DailyForecastItem } from './DailyForecastItem'

export function DailyForecast() {
  return (
    <section className='mt-12 w-full'>
      <h1 className='text-Neutral-0 text-lg font-semibold'>Daily Forecast</h1>
      <section className='mt-3 grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-3'>
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
