import { DropdownMenu, DropdownPlaceItem, Input } from '@/components/ui'
import type { PlaceSearchBar } from './place-searchbar.types'
import { useState } from 'react'
import { SearchIsLoading } from '@/components/feedback'
import { AnimatePresence } from 'motion/react'
import { useForecastStore } from '@/store'

export function PlaceSearchBar({ onHandleSearch, name, placeItems, isLoading }: PlaceSearchBar) {
  const [isFocus, setIsFocus] = useState(false)
  const selectPlace = useForecastStore(store => store.selectPlace)

  return (
    <div className='relative w-full max-w-96'>
      <Input 
        name={name} 
        placeholder='Search for a place...' 
        onChange={onHandleSearch}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <AnimatePresence>
        { 
          isLoading && isFocus && 
          <DropdownMenu className='w-full top-14'>
            <SearchIsLoading/> 
          </DropdownMenu>
        }
        {
          placeItems && isFocus &&
          <DropdownMenu className='w-full top-14'>
            {
              placeItems.map(place => (
                <DropdownPlaceItem
                  key={place.id}
                  country={place.country}
                  countryCode={place.country_code}
                  place={place.name}
                  onClick={() => selectPlace(place)}
                />
              ))
            }
          </DropdownMenu>
        }
      </AnimatePresence>
    </div>
  )
}