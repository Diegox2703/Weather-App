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
    wind_speed_10m: z.number(),
    weather_code: z.number()
})

export const DailySchema = z.object({
    time: z.array(z.string()),
    temperature_2m_max: z.array(z.number()),
    temperature_2m_min: z.array(z.number()),
    weather_code: z.array(z.number())
}).transform((DailySchema) => (
    DailySchema.time.map((time, i) => ({
        time,
        temperature_2m_max: DailySchema.temperature_2m_max[i],
        temperature_2m_min: DailySchema.temperature_2m_min[i],
        weather_code: DailySchema.weather_code[i]
    }))
))

export const HourlySchema = z.object({
    time: z.array(z.string()),
    temperature_2m: z.array(z.number()),
    weather_code: z.array(z.number())
}).transform((HourlySchema) => (
    HourlySchema.time.map((time, i) => ({
        time,
        temperature_2m: HourlySchema.temperature_2m[i],
        weather_code: HourlySchema.weather_code[i]
    }))
))

export const ForecastSchema = z.object({
    latitude: z.number(),
    longitude: z.number(),
    timezone: z.string(),
    current_units: CurrentUnitsSchema,
    current: CurrentSchema,
    hourly: HourlySchema,
    daily: DailySchema
})