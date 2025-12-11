import type { DropdownMenuItem } from "@/types"

export interface DailyMenuProps {
    days: DropdownMenuItem[]
    value?: string
    placeholder: string
    onChange: (value: string) => void
}