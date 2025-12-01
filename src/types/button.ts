import type { Size, Variant } from '../types'
import type { HTMLAttributes } from 'react'

export interface BaseBtnProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: Variant
    size?: Size
}