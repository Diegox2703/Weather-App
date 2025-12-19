import { cva } from 'class-variance-authority'

export const baseBtnStyles = cva(
    'text-center flex items-center justify-center gap-2 rounded-md cursor-pointer transition-colors',
    {
        variants: {
            variant: {
                primary: 'bg-Neutral-800 text-Neutral-0 hover:bg-Neutral-700',
                secondary: 'bg-Neutral-600 text-Neutral-0 hover:bg-Neutral-600/80',
                tertiary: 'bg-Blue-500 text-Neutral-0 hover:bg-Blue-700'
            },
            size: {
                sm: 'text-sm px-3 py-1.5 h-8',
                md: 'text-base px-4 py-2 h-10',
                lg: 'text-lg px-6 py-3 h-12'
            }
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md'
        }
    }
)