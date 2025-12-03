import { BaseBtn } from '@/components/ui'
import { PlaceSearchBar } from './PlaceSearchBar'

export function ForecastHeader() {
  return (
    <section className='flex flex-col items-center justify-center gap-15'>
      <h1 className='text-Neutral-0 text-5xl text-center font-Bricolage-Grotesque'>How's the sky looking today?</h1>
      <section className='flex justify-center gap-3 w-full'>
        <PlaceSearchBar/>
        <BaseBtn size='lg' variant='tertiary'>Search</BaseBtn>
      </section>
    </section>
  )
}