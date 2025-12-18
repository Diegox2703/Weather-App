import { PlaceSearch } from './PlaceSearch'
import { styles } from './styles'

export function ForecastSearch() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>How's the sky looking today?</h1>
      <PlaceSearch/>
    </section>
  )
}