import type { Place } from "@/types"

export interface PlaceSearchBar {
    onHandleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
    name: string
    placeItems: Place[] | undefined
    isLoading: boolean
}