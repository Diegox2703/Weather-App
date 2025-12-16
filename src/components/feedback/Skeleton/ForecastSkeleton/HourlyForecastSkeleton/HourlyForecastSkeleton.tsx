import { Skeleton } from '../../Skeleton'

export function HourlyForecastSkeleton() {
  return (
    <section className='flex-1 min-w-[280px] sm:min-w-[350px] max-h-[702px] bg-Neutral-800 rounded-md w-full p-5'>
        <section className='flex flex-col gap-3'>
            {
                Array.from({ length: 9 }).map((_, i) => (
                    <Skeleton key={i} className='h-14 rounded-md'/>
                ))
            }
        </section>
    </section>
  )
}
