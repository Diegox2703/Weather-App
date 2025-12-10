import { forecastApi, searchApi } from '@/config'
import { ForecastSchema, PlaceResponseSchema } from '@/schema'
import type { ForecastParams, ForecastResponse, PlaceName } from '@/types'
import { forecastParams } from '@/utils'

export const getPlace = async (name: PlaceName, count = 5) => {
    const { data } = await searchApi.get('/search', {
        params: {
            name,
            count
        }
    })

    const res = PlaceResponseSchema.parse(data)

    return res.results
}

export const getForecast = async (params: ForecastParams): Promise<ForecastResponse> => {
    const { data } = await forecastApi.get('forecast', {
        params: forecastParams(params)
    })

    const res = ForecastSchema.parse(data)

    return res
}