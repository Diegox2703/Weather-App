import { create } from 'zustand'
import type { UseForecastStore } from './use-forcast-store.types'

export const useForecastStore = create<UseForecastStore>((set) => ({
    place: {
        id: 1,
        latitude: 0,
        longitude: 0,
        country: '',
        country_code: '',
        name: ''
    },
    units: {
        temperature_unit: 'celsius',
        precipitation_unit: 'mm',
        wind_speed_unit: 'kmh'
    },
    selectPlace: (place) => set({ place: place }),
}))
