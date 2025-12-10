import type { ForecastParams } from '@/types'

export const forecastParams = ({ latitude, longitude, precipitation_unit, temperature_unit, wind_speed_unit }: ForecastParams) => ({
    latitude,
    longitude,
    precipitation_unit,
    temperature_unit,
    wind_speed_unit,
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code',
    hourly: 'temperature_2m,weather_code',
    daily: 'temperature_2m_max,temperature_2m_min,weather_code',
    timezone: 'auto'
})