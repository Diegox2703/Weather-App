import { SearchIcon } from '../Icon'
import type { InputProps } from './input.types'
import { styles } from './styles'

export function Input({ ...props }: InputProps) {
  return (
    <div className={styles.container}>
        <SearchIcon/>
        <input 
            className={styles.input} 
            {...props}
            autoComplete='off'
        />
    </div>
  )
}
