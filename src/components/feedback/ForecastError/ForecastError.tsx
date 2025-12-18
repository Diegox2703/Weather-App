import { BaseBtn, ErrorIcon, RetryIcon } from '@/components/ui'
import type { ForecastErrorProps } from './forecast-error.types'
import { styles } from './styles'

export function ForecastError({ onRetry }: ForecastErrorProps) {
  return (
    <div className={styles.container}>
      <ErrorIcon width={40} height={40}/>
      <h1 className={styles.title}>Something went wrong</h1>
      <p className={styles.label}>We couldn't connect to the server (API error). Please try again in a few moments</p>
      <BaseBtn onClick={onRetry}>
        <RetryIcon/>
        Retry
      </BaseBtn>
    </div>
  )
}