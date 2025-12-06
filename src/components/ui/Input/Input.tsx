import { SearchIcon } from '../Icon'
import type { InputProps } from './input.types'

export function Input({ ...props }: InputProps) {
  return (
    <div className='bg-Neutral-800 hover:bg-Neutral-700 flex items-center gap-3 px-5 rounded-md h-12 w-full transition-colors'>
        <SearchIcon/>
        <input 
            className="text-Neutral-0 font-semibold placeholder:text-Neutral-300 placeholder:font-semibold size-full outline-0" 
            {...props}
            autoComplete='off'
        />
    </div>
  )
}
