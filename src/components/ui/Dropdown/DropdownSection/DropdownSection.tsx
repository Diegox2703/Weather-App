import { DropdownItem } from '../DropdownItem'
import type { DropdownSectionProps } from './dropdown-section.types'
import { styles } from './styles'

export function DropdownSection({ section, items, selectedOpt }: DropdownSectionProps) {
  return (
    <section className={styles.container}>
      <span className={styles.section}>{ section }</span>
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
