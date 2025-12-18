import { CurrentForecastDetailsItem } from '../CurrentForecastDetailsItem'
import { styles } from './styles'
import type { CurrentForecastDetailsProps } from './current-forecast-details.types'
import { CURRENT_DETAILS_CONFIG } from '@/constants'

export function CurrentForecastDetails({ current, currentUnits }: CurrentForecastDetailsProps) {
  return (
    <section className={styles}>
        {
          CURRENT_DETAILS_CONFIG.map(item => (
            <CurrentForecastDetailsItem
              key={item.section}
              section={item.section}
              value={current[item.key]}
              unit={currentUnits[item.key]}
            />
          ))
        }
    </section>
  )
}