import { ErrorIcon } from '@/components/ui'
import type { SearchErrorProps } from './search-error.types'

export function SearchError({ message }: SearchErrorProps) {
  return (
    <article className='flex items-center gap-2 text-Neutral-0 text-sm p-2'>
      <ErrorIcon/>
      { message }
    </article>
  )
}
