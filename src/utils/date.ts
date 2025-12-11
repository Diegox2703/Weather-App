import { DAYS, MONTHS } from '@/constants'

export const getCurrentDate = (date: string) => {
    const currentDate = new Date(date)

    const dayOfTheMonth = currentDate.getDate()
    const day = DAYS[currentDate.getDay()]
    const month = MONTHS[currentDate.getMonth() - 1].slice(0, 3)
    const year = currentDate.getFullYear()

    return `${day}, ${month} ${dayOfTheMonth}, ${year}`
}

export const getDay = (date: string) => {
    const [ year, month, day ] = date.split('-').map(Number)
    const selectedDate = new Date(year, month - 1, day)

    return DAYS[selectedDate.getDay()].slice(0, 3)
}

export const getTime = (date: string) => {
    const selectedDate = new Date(date)

    const hourIdx = selectedDate.getHours()
    const hour = hourIdx % 12 || 12
    const meridiem = hourIdx >= 12 ? 'PM' : 'AM'

    return `${hour} ${meridiem}`
}
