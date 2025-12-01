import type { DropdownMenuItem } from '@/types'

export interface DropdownMenuItemProps extends DropdownMenuItem {
    selectedOpt?: string
    checkMark?: boolean
    onClick?: () => void
}