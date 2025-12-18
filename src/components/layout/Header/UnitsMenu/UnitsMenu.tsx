import { DropdownItem, DropdownMenu, DropdownSection, UnitSelectBtn } from '@/components/ui'
import type { UnitsMenuProps } from './units-menu.types'
import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { useForecastStore } from '@/store'

export function UnitsMenu({ unitItems }: UnitsMenuProps) {
  const unitSystem = useForecastStore(store => store.unitSystem)
  const handleUnits = useForecastStore(store => store.handleUnits)
  const handleSelectedUnit = useForecastStore(store => store.handleSelectedUnit)
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className='relative'>
      <UnitSelectBtn onClick={toggleMenu}/>
      <AnimatePresence>
        {
          isOpen &&
          <DropdownMenu>
            <DropdownItem 
              value='unit-btn' 
              label={`Switch to ${unitSystem === 'metric' ? 'imperial' : 'metric'}`} 
              onClick={handleUnits}
            />
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