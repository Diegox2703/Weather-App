import { BaseBtn, Input } from '@/components/ui'
import { usePlaceSearch } from '@/hooks'
import { SearchResultMenu } from '../SearchResultMenu'
import { styles } from './styles'

export function PlaceSearch() {
  const { 
    onHandleSearch, 
    onHandleSearchByEnter, 
    onHandleSearchByClick, 
    onHandleFocus,
    onHandleBlur,
    isLoading, 
    isError,
    data, 
    query,
    isFocus
  } = usePlaceSearch()

  return (
    <section className={styles.container}>
      <div className={styles.search}>
        <Input 
          onChange={onHandleSearch}
          onKeyDown={onHandleSearchByEnter}
          onFocus={onHandleFocus}
          onBlur={onHandleBlur}
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