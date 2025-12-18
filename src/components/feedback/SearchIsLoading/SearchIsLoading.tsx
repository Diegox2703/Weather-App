import { LoadingIcon } from '@/components/ui'
import { styles } from './styles'

export function SearchIsLoading() {
  return (
    <article className={styles.container}>
      <div className={styles.icon}>
        <LoadingIcon/>
      </div>
      Search in progress
    </article>
  )
}