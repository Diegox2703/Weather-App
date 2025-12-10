import type { WeatherIcons } from '@/types'

export const getWeatherIcon = (code: number): WeatherIcons => {
    if (code >= 0 && code <= 1) return 'sunny'
    if (code === 2) return 'partly-cloudy'
    if (code === 3) return 'overcast'
    if (code >= 45 && code <= 48) return 'fog'
    if (code >= 51 && code <= 57) return 'drizzle'
    if (code >= 61 && code <= 67) return 'rain'
    if (code >= 71 && code <= 77) return 'snow'
    if (code >= 80 && code <= 82) return 'rain'
    if (code >= 85 && code <= 86) return 'snow'
    if (code >= 95 && code <= 99) return 'storm'
    return 'overcast'
}