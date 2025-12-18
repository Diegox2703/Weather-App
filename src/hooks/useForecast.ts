import { getForecast } from '@/services'
import { useForecastStore } from '@/store'
import type { Forecast, ForecastParams } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export const useForecast = () => {
    const place = useForecastStore(store => store.place)
    const units = useForecastStore(store => store.units)
    const selectDay = useForecastStore(store => store.selectDay)
    const params: ForecastParams = {
        latitude: place.latitude,
        longitude: place.longitude,
        ...units
    }

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['forecast', place, units],
        queryFn: ({ signal }) => getForecast(params, signal),
        refetchOnWindowFocus: false,
        retry: 2
    })

    const forecast: Forecast | undefined = data ? {
        name: place.name,
        country: place.country,
        ...data
    } : undefined

    useEffect(() => {
        selectDay(undefined)
    }, [place, units])

    return { forecast, isLoading, isError, refetch }
}