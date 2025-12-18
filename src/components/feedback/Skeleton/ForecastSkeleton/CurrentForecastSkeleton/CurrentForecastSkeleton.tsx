import { Skeleton } from '../../Skeleton'
import { styles } from './styles'

export function CurrentForecastSkeleton() {
  return (
    <section className={styles.container}>
        <Skeleton className={styles.place}/>
        <section className={styles.detailsSection}>
            {
                Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className={styles.details}/>
                ))
            }
        </section>
    </section>
  )
}
