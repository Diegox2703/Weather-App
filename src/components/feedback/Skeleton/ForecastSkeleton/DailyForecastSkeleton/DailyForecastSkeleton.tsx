import { Skeleton } from '../../Skeleton'
import { styles } from './styles'

export function DailyForecastSkeleton() {
  return (
    <section className={styles.container}>
        {
            Array.from({ length: 7 }).map((_, i) => (
                <Skeleton key={i} className={styles.dailyItem}/>
            ))
        }
    </section>
  )
}