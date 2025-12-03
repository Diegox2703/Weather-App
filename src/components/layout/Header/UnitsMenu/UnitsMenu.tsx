import { DropdownItem, DropdownMenu, DropdownSection, UnitSelectBtn } from '@/components/ui'
import type { UnitsMenuProps } from './units-menu.types'
import { useState } from 'react'
import { AnimatePresence } from 'motion/react'

export function UnitsMenu({ unitItems }: UnitsMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {setIsOpen(!isOpen)}

  const handleSelectedUnit = (section: string) => {
    if (section === 'Temperature') return 'fahrenheit'
    if (section === 'Wind Speed') return 'mph'
    return 'in'
  }

  return (
    <div className='relative'>
      <UnitSelectBtn onClick={toggleMenu}/>
      <AnimatePresence>
        {
          isOpen &&
          <DropdownMenu>
            <DropdownItem value='unit-btn' label='Switch to imperial' onClick={() => console.log('Click')}/>
            {
              unitItems.map(unit => (
                <DropdownSection 
                  key={unit.section}
                  selectedOpt={handleSelectedUnit(unit.section)}
                  {...unit}
                />
              ))
            }
          </DropdownMenu>
        }
      </AnimatePresence>
    </div>
  )
}