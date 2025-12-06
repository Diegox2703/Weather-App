import { LoadingIcon } from '@/components/ui'

export function SearchIsLoading() {
  return (
    <article className='flex items-center gap-2 text-Neutral-0 text-sm p-2'>
      <div className='animate-spin'>
        <LoadingIcon/>
      </div>
      Search in progress
    </article>
  )
}
