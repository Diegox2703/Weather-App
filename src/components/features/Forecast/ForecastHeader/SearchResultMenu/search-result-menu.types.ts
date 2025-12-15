import type { Place } from '@/types'

export interface SearchResultMenuProps {
    isLoading: boolean
    isError: boolean
    isFocus: boolean
    results: Place[] | undefined
    onHandleSearchByClick: (place: Place) => void
}