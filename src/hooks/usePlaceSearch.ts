import { getPlace } from '@/services'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export const usePlaceSearch = () => {
    const [search, setSearch] = useState('')
    
    const { data, refetch, isLoading } = useQuery({
        queryKey: ['place', search],
        queryFn: () => getPlace(search),
        enabled: false
    })

    const handleSearchBarValue = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

    const searchPlace = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (search.trim() === '') return
        refetch()
    }

    return { handleSearchBarValue, searchPlace, isLoading, data }
}