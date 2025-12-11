import { create } from 'zustand'
import type { UseForecastStore } from './use-forcast-store.types'

export const useForecastStore = create<UseForecastStore>((set, get) => ({
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
    selectedDay: undefined,
    selectPlace: (place) => set({ place: place }),
    selectDay: (value) => set({ selectedDay: value }),
    filterHourlyItems: (hourlyItems, currentTime) => (
      hourlyItems.filter(item => {
        const date = new Date(item.time).toLocaleDateString()
        if (get().selectedDay) return date === get().selectedDay
        if (currentTime) return date === currentTime
        return item
      })
    ),
}))
