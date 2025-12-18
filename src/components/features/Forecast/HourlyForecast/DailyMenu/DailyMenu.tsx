import { BaseBtn, DropdownIcon, DropdownItem, DropdownMenu } from '@/components/ui'
import { useDailyMenu } from '@/hooks'
import type { DailyMenuProps } from '@/types'
import { AnimatePresence } from 'motion/react'

export function DailyMenu({ days, value, placeholder, onChange }: DailyMenuProps) {
  const { 
    isOpen, 
    selectedOpt, 
    handleSelectValue, 
    handleSelectedOpt, 
    openMenu,
    closeMenu, 
} = useDailyMenu({ days, placeholder, value, onChange })

  return (
    <div className='relative'>
      <BaseBtn onClick={openMenu} onBlur={closeMenu} variant='secondary'>
        { handleSelectValue() }
        <DropdownIcon/>
      </BaseBtn>
      <AnimatePresence>
        {
          isOpen &&
          <DropdownMenu>
            {
              days.map(day => (
                <DropdownItem
                  key={day.value}
                  {...day}
                  selectedOpt={selectedOpt}
                  onClick={() => handleSelectedOpt(day.value)}
                />
              ))
            }
          </DropdownMenu>
        }
      </AnimatePresence>
    </div>
  )
}