import { z } from 'zod'

export const PlaceSchema = z.object({
    id: z.number(),
    name: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    country_code: z.string(),
    country: z.string()
})

export const PlaceResponseSchema = z.object({
    results: z.array(PlaceSchema).default([])
})