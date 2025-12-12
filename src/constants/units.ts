import type { UnitsMenuSection } from '@/types'

export const UNITS_MENU_ITEMS: UnitsMenuSection[] = [
    {
        section: 'Temperature',
        items: [
            {
                value: 'celsius',
                label: 'Celsius (°C)'
            },
            {
                value: 'fahrenheit',
                label: 'Fahrenheit (°F)'
            }
        ],
    },
    {
        section: 'Wind Speed',
        items: [
            {
                value: 'kmh',
                label: 'km/h'
            },
            {
                value: 'mph',
                label: 'mph'
            }
        ],
    },
    {
        section: 'Precipitation',
        items: [
            {
                value: 'mm',
                label: 'Millimeters (mm)'
            },
            {
                value: 'inch',
                label: 'Inches (in)'
            }
        ],
    }
]