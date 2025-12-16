import { Skeleton } from '../../Skeleton'

export function DailyForecastSkeleton() {
  return (
    <section className='mt-12 grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-3'>
        {
            Array.from({ length: 7 }).map((_, i) => (
                <Skeleton key={i} className='h-44 rounded-md'/>
            ))
        }
    </section>
  )
}
