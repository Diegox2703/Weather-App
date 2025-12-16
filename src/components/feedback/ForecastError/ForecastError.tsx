import { BaseBtn, ErrorIcon, RetryIcon } from '@/components/ui'
import type { ForecastErrorProps } from './forecast-error.types'

export function ForecastError({ onRetry }: ForecastErrorProps) {
  return (
    <div className='flex flex-col gap-5 items-center text-center'>
      <ErrorIcon width={40} height={40}/>
      <h1 className='text-5xl text-Neutral-0 font-Bricolage-Grotesque'>Something went wrong</h1>
      <p className='text-Neutral-300'>We couldn't connect to the server (API error). Please try again in a few moments</p>
      <BaseBtn onClick={onRetry}>
        <RetryIcon/>
        Retry
      </BaseBtn>
    </div>
  )
}