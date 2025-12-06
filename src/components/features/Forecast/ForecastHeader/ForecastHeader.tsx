import { BaseBtn } from '@/components/ui'
import { PlaceSearchBar } from './PlaceSearchBar'
import { usePlaceSearch } from '@/hooks'

export function ForecastHeader() {
  const { handleSearchBarValue, searchPlace, isLoading, data } = usePlaceSearch()

  return (
    <section className='flex flex-col items-center justify-center gap-15'>
      <h1 className='text-Neutral-0 text-5xl text-center font-Bricolage-Grotesque'>How's the sky looking today?</h1>
      <form onSubmit={searchPlace} className='flex justify-center gap-3 w-full'>
        <PlaceSearchBar 
          isLoading={isLoading} 
          name='place' 
          onHandleSearch={handleSearchBarValue} 
          placeItems={data}
        />
        <BaseBtn size='lg' variant='tertiary'>Search</BaseBtn>
      </form>
    </section>
  )
}