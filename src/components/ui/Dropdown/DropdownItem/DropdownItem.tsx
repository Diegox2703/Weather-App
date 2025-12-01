import { CheckMarkIcon } from '../../Icon'
import { dropdownMenuItemStyles } from './dropdown-menu-item.styles'
import type { DropdownMenuItemProps } from './dropdown-menu-item.types'

export function DropdownItem({ value, label, selectedOpt, checkMark, onClick }: DropdownMenuItemProps) {
  const isActive = value === selectedOpt
  const isClickable = onClick !== undefined

  return (
    <li 
      className={dropdownMenuItemStyles({ isActive, isClickable })}
      onClick={onClick}
    >
      { label }
      { checkMark && isActive && <CheckMarkIcon/>}
    </li>
  )
}