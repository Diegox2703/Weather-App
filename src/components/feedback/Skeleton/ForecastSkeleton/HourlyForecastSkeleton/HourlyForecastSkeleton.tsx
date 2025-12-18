import { Skeleton } from '../../Skeleton'
import { styles } from './styles'

export function HourlyForecastSkeleton() {
  return (
    <section className={styles.container}>
        <section className={styles.hourlySection}>
            {
                Array.from({ length: 9 }).map((_, i) => (
                    <Skeleton key={i} className={styles.hourlyItem}/>
                ))
            }
        </section>
    </section>
  )
}