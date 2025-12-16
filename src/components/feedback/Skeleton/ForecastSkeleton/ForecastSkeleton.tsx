import { CurrentForecastSkeleton } from './CurrentForecastSkeleton'
import { DailyForecastSkeleton } from './DailyForecastSkeleton'
import { HourlyForecastSkeleton } from './HourlyForecastSkeleton'

export function ForecastSkeleton() {
  return (
    <section className='flex flex-wrap gap-10'>
        <section className='flex-2 min-w-[280px] sm:min-w-[400px]'>
           <CurrentForecastSkeleton/>
           <DailyForecastSkeleton/>
        </section>
        <HourlyForecastSkeleton/>
    </section>
  )
}