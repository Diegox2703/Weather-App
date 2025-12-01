export interface DropdownMenuItem {
    value: string
    label: string
}

export interface DropdownMenuSection {
    section: string
    items: DropdownMenuItem[]
}