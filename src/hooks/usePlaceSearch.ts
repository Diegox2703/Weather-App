import { getPlace } from '@/services'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useDebounce } from './useDebounce'
import { useForecastStore } from '@/store'
import type { Place } from '@/types'

export const usePlaceSearch = () => {
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState('')
    const [isFocus, setIsFocus] = useState(false)
    const debouncedSearch = useDebounce(search)
    const selectPlace = useForecastStore(store => store.selectPlace)
    
    const { data, isLoading, isError } = useQuery({
        queryKey: ['place', debouncedSearch],
        queryFn: ({ signal }) => getPlace(debouncedSearch, signal),
        enabled: debouncedSearch.trim() !== '',
        refetchOnWindowFocus: false
    })

    const onHandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        setQuery(e.target.value)
    }

    const onHandleSearchByEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const key = e.key
        if (key === 'Enter' && data) {
            selectPlace(data[0])
            setQuery(data[0].name)
            e.currentTarget.blur()
        } 
    }

    const onHandleSearchByClick = (place: Place) => {
        selectPlace(place)
        setQuery(place.name)
    }

    const onHandleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setIsFocus(true)
        setTimeout(() => {
            e.target.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        }, 300);
    } 

    const onHandleBlur = () => {
        setIsFocus(false)
    }

    return { 
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
    }
}