import { PlaceSearch } from './PlaceSearch'

export function ForecastSearch() {
  return (
    <section className='flex flex-col items-center justify-center gap-15'>
      <h1 className='text-Neutral-0 text-5xl text-center font-Bricolage-Grotesque'>How's the sky looking today?</h1>
      <PlaceSearch/>
    </section>
  )
}