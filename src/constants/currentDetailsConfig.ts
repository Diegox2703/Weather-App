import type { CurrentDetailsConfig } from '@/types'

export const CURRENT_DETAILS_CONFIG: CurrentDetailsConfig[] = [
    {
        key: 'apparent_temperature',
        section: 'Feels Like'
    },
    {
        key: 'relative_humidity_2m',
        section: 'Humidity'
    },
    {
        key: 'wind_speed_10m',
        section: 'Wind'
    },
    {
        key: 'precipitation',
        section: 'Precipitation'
    }
]