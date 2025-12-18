import { create } from 'zustand'
import type { ForecastStore } from './forcast-store.types'

export const useForecastStore = create<ForecastStore>((set, get) => ({
    place: {
        id: 2950159,
        latitude: 52.52437,
        longitude: 13.41053,
        country: 'Germany',
        country_code: 'DE',
        name: 'Berlin'
    },
    unitSystem: 'metric',
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
    handleUnits: () => {
      if (get().unitSystem === 'metric') return set({
        unitSystem: 'imperial',
        units: {
          temperature_unit: 'fahrenheit',
          precipitation_unit: 'inch',
          wind_speed_unit: 'mph'
        }
      })
      return set({
        unitSystem: 'metric',
        units: {
          temperature_unit: 'celsius',
          precipitation_unit: 'mm',
          wind_speed_unit: 'kmh'
        }
      })
    },
    handleSelectedUnit: (section) => {
      if (section === 'Temperature') return get().units.temperature_unit
      if (section === 'Wind Speed') return get().units.wind_speed_unit
      return get().units.precipitation_unit
    },
}))
