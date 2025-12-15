import { BaseBtn, Input } from '@/components/ui'
import { usePlaceSearch } from '@/hooks'
import { SearchResultMenu } from '../SearchResultMenu'

export function PlaceSearch() {
  const { 
    onHandleSearch, 
    onHandleSearchByEnter, 
    onHandleSearchByClick, 
    onHandleFocus,
    isLoading, 
    isError,
    data, 
    query,
    isFocus
  } = usePlaceSearch()

  return (
    <section className='flex justify-center gap-3 w-full'>
      <div className='relative w-full max-w-96'>
        <Input 
          onChange={onHandleSearch}
          onKeyDown={onHandleSearchByEnter}
          onFocus={() => onHandleFocus(true)}
          onBlur={() => onHandleFocus(false)}
          value={query}
          placeholder='Search for a place...' 
        />
        <SearchResultMenu
          isLoading={isLoading}
          isError={isError}
          isFocus={isFocus}
          results={data}
          onHandleSearchByClick={onHandleSearchByClick}
        />
      </div>
      <BaseBtn 
        onClick={() => data ? onHandleSearchByClick(data[0]) : undefined} 
        size='lg' 
        variant='tertiary'
      >
          Search
      </BaseBtn>
    </section>
  )
}