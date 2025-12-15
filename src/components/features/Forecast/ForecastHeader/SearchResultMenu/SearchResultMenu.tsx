import { SearchError, SearchIsLoading } from '@/components/feedback'
import { DropdownMenu, DropdownPlaceItem } from '@/components/ui'
import { AnimatePresence } from 'motion/react'
import type { SearchResultMenuProps } from './search-result-menu.types'

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
            <DropdownMenu className='w-full top-14'>
                <SearchIsLoading/> 
            </DropdownMenu>
        }
        { 
            isError && isFocus && 
            <DropdownMenu className='w-full top-14'>
                <SearchError message='An error has occurred'/> 
            </DropdownMenu>
        }
        {
            results && results.length === 0 && isFocus &&
            <DropdownMenu className='w-full top-14'>
                <SearchError message='No place was found'/>
            </DropdownMenu>
        }
        {
            results && results.length > 0 && isFocus &&
            <DropdownMenu className='w-full top-14'>
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