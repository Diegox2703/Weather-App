import { cva } from 'class-variance-authority'

export const dropdownMenuItemStyles = cva(
    'flex items-center justify-between text-Neutral-0 py-2 px-2 rounded-md transition-colors',
    {
        variants: {
            isActive: {
                true: 'bg-Neutral-700',
                false: ''
            },
            isClickable: {
                true: 'cursor-pointer hover:bg-Neutral-700',
                false: ''
            }
        },
        defaultVariants: {
            isActive: false,
            isClickable: false
        }
    }
)