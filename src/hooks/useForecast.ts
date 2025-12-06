import { getForecast } from '@/services'
import { useForecastStore } from '@/store'
import type { Forecast, ForecastParams } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useForecast = () => {
    const place = useForecastStore(store => store.place)
    const units = useForecastStore(store => store.units)
    const params: ForecastParams = {
        latitude: place.latitude,
        longitude: place.longitude,
        ...units
    }

    const { data } = useQuery({
        queryKey: ['forecast', params],
        queryFn: () => getForecast(params)
    })

    const forecast: Forecast | undefined = data ? {
        name: place.name,
        country: place.country,
        ...data
    } : undefined

    return { forecast }
}