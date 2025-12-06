import type { PlaceResponseSchema, PlaceSchema } from '@/schema'
import type z from 'zod'

export type PlaceResponse = z.infer<typeof PlaceResponseSchema>

export type Place = z.infer<typeof PlaceSchema>

export type PlaceDetails = Pick<Place, 'name' | 'country'>

export type PlaceName = Place['name']