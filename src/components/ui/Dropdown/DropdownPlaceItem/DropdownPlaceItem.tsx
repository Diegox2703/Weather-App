import { CircleFlag } from 'react-circle-flags'
import type { DropdownPlaceItemProps } from './dropdown-place-item.types'

export function DropdownPlaceItem({ countryCode, country, place, onClick }: DropdownPlaceItemProps) {
  return (
    <li 
      className='flex items-center gap-3 p-2 hover:bg-Neutral-700 rounded-md cursor-pointer transition-colors'
      onClick={onClick}
    >
        <section className='size-10'>
            <CircleFlag countryCode={ countryCode.toLowerCase() }/>
        </section>
        <section className='h-10 flex flex-col justify-center leading-normal'>
            <h1 className='text-Neutral-0 leading-4'>{ place }</h1>
            <span className='text-Neutral-300 text-xs'>{ country }</span>
        </section>
    </li>
  )
}
