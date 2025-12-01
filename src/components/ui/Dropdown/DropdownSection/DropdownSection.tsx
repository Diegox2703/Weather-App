import { DropdownItem } from '../DropdownItem'
import type { DropdownSectionProps } from './dropdown-section.types'

export function DropdownSection({ section, items, selectedOpt }: DropdownSectionProps) {
  return (
    <section className='pb-1 not-last:border-b-2 not-last:border-b-Neutral-600'>
      <span className='inline-block text-Neutral-300 text-sm p-2'>{ section }</span>
      {
        items.map(item => (
            <DropdownItem 
                key={item.value}
                selectedOpt={selectedOpt} 
                {...item}
                checkMark
            />
        ))
      }
    </section>
  )
}
