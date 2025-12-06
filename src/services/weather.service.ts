import { forecastApi, searchApi } from '@/config'
import { ForecastSchema, PlaceResponseSchema } from '@/schema'
import type { ForecastParams, ForecastResponse, PlaceName } from '@/types'

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

const forecastParams = ({ latitude, longitude, precipitation_unit, temperature_unit, wind_speed_unit }: ForecastParams) => ({
    latitude,
    longitude,
    precipitation_unit,
    temperature_unit,
    wind_speed_unit,
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m',
    hourly: 'temperature_2m,weather_code',
    daily: 'temperature_2m_max,temperature_2m_min,weather_code',
    timezone: 'auto'
})

export const getForecast = async (params: ForecastParams): Promise<ForecastResponse> => {
    const { data } = await forecastApi.get('forecast', {
        params: forecastParams(params)
    })

    const res = ForecastSchema.parse(data)

    return res
}