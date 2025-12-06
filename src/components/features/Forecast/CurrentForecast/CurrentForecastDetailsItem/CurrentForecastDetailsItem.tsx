import type { CurrentForecastDetailsItemProps } from './current-forecast-details-item'

export function CurrentForecastDetailsItem({ value, unit, section }: CurrentForecastDetailsItemProps) {
  return (
    <article className='flex flex-col justify-between bg-Neutral-800 h-30 rounded-md p-4'>
        <span className='text-Neutral-300 text-sm font-semibold'>{ section }</span>
        <h2 className='text-Neutral-0 text-3xl'>{value} {unit}</h2>
    </article>
  )
}
