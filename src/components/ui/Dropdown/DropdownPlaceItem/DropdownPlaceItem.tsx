import { CircleFlag } from 'react-circle-flags'
import type { DropdownPlaceItemProps } from './dropdown-place-item.types'
import { styles } from './styles'

export function DropdownPlaceItem({ countryCode, country, place, onClick }: DropdownPlaceItemProps) {
  return (
    <li 
      className={styles.container}
      onClick={onClick}
    >
        <section className={styles.iconSection}>
            <CircleFlag countryCode={ countryCode.toLowerCase() }/>
        </section>
        <section className={styles.detailsSection}>
            <h1 className={styles.place}>{ place }</h1>
            <span className={styles.country}>{ country }</span>
        </section>
    </li>
  )
}
