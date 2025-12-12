import type { Units, UnitSection } from './units'

export interface DropdownMenuItem {
    value: string
    label: string
}

export interface DropdownMenuSection {
    section: string
    items: DropdownMenuItem[]
}

export interface UnitsMenuSection {
    section: UnitSection
    items: {
        value: Units
        label: string
    }[]
}