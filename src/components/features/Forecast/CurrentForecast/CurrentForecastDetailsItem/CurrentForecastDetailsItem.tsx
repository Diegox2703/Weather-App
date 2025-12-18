import type { CurrentForecastDetailsItemProps } from './current-forecast-details-item'
import { styles } from './styles'

export function CurrentForecastDetailsItem({ value, unit, section }: CurrentForecastDetailsItemProps) {
  return (
    <article className={styles.container}>
        <span className={styles.section}>{ section }</span>
        <h2 className={styles.label}>{value.toFixed(0)} {unit}</h2>
    </article>
  )
}
