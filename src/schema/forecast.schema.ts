import { z } from 'zod'

export const CurrentUnitsSchema = z.object({
    relative_humidity_2m: z.string(),
    precipitation: z.string(),
    wind_speed_10m: z.string()
})

export const CurrentSchema = z.object({
    time: z.string(),
    temperature_2m: z.number(),
    relative_humidity_2m: z.number(),
    apparent_temperature: z.number(),
    precipitation: z.number(),
    wind_speed_10m: z.number()
})

export const ForecastSchema = z.object({
    latitude: z.number(),
    longitude: z.number(),
    timezone: z.string(),
    current_units: CurrentUnitsSchema,
    current: CurrentSchema,
    hourly_units: z.object({
        temperature_2m: z.string()
    }),
    hourly: z.object({
        time: z.array(z.string()),
        temperature_2m: z.array(z.number()),
        weather_code: z.array(z.number())
    }),
    daily_units: z.object({
        temperature_2m_max: z.string(),
        temperature_2m_min: z.string(),
    }),
    daily: z.object({
        time: z.array(z.string()),
        temperature_2m_max: z.array(z.number()),
        temperature_2m_min: z.array(z.number()),
        weather_code: z.array(z.number())
    })
})