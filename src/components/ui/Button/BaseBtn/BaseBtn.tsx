import type { BaseBtnProps } from '@/types'
import { baseBtnStyles } from './base-btn.styles'

export function BaseBtn({ variant, size, children, ...props }: BaseBtnProps) {
  return (
    <button 
        className={baseBtnStyles({ variant, size })}
        {...props}
    >
      { children }
    </button>
  )
}
