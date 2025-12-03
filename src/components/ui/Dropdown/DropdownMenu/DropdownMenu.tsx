import type { DropdownMenuProps } from './dropdown-menu'
import { dropdownMenuStyles } from './dropdown-menu.styles'
import { motion } from 'motion/react'

export function DropdownMenu({ children, className }: DropdownMenuProps) {
  return (
    <motion.div 
      className={ dropdownMenuStyles({ className }) }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ul>
        { children }
      </ul>
    </motion.div>
  )
}