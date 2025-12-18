import { SearchError, SearchIsLoading } from '@/components/feedback'
import { DropdownMenu, DropdownPlaceItem } from '@/components/ui'
import { AnimatePresence } from 'motion/react'
import type { SearchResultMenuProps } from './search-result-menu.types'
import { styles } from './styles'

export function SearchResultMenu({
    isError,
    isFocus,
    isLoading,
    results,
    onHandleSearchByClick
}: SearchResultMenuProps) {
  return (
    <AnimatePresence>
        { 
            isLoading && isFocus && 
            <DropdownMenu className={styles}>
                <SearchIsLoading/> 
            </DropdownMenu>
        }
        { 
            isError && isFocus && 
            <DropdownMenu className={styles}>
                <SearchError message='An error has occurred'/> 
            </DropdownMenu>
        }
        {
            results && results.length === 0 && isFocus &&
            <DropdownMenu className={styles}>
                <SearchError message='No place was found'/>
            </DropdownMenu>
        }
        {
            results && results.length > 0 && isFocus &&
            <DropdownMenu className={styles}>
                {
                    results.map(place => (
                        <DropdownPlaceItem
                            key={place.id}
                            country={place.country}
                            countryCode={place.country_code}
                            place={place.name}
                            onClick={() => onHandleSearchByClick(place)}
                        />
                    ))
                }
            </DropdownMenu>
        }
    </AnimatePresence>
  )
}