import { Skeleton } from '../../Skeleton'

export function CurrentForecastSkeleton() {
  return (
    <section className='flex flex-col gap-8 w-full'>
        <Skeleton className='w-full h-[286px] rounded-3xl'/>
        <section className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5'>
            {
                Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className='h-30 rounded-md'/>
                ))
            }
        </section>
    </section>
  )
}
