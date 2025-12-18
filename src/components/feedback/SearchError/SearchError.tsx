import { ErrorIcon } from '@/components/ui'
import type { SearchErrorProps } from './search-error.types'
import { styles } from './styles'

export function SearchError({ message }: SearchErrorProps) {
  return (
    <article className={styles}>
      <ErrorIcon/>
      { message }
    </article>
  )
}