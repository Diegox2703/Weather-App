import type { DailyMenuProps } from '@/types'
import { useState } from 'react'

export const useDailyMenu = ({ days, placeholder, value }: DailyMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOpt, setSelectedOpt] = useState('')

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleSelectValue = () => {
    const day = days.find(day => day.value === selectedOpt)
    if (day) return day.label
    const defaultValue = days.find(day => day.value === value)
    if (defaultValue) {
        setSelectedOpt(defaultValue.value)
        return
    }
    return placeholder
  }

  const handleSelectedOpt = (value: string) => {
    setSelectedOpt(value)
  }

  return {
    isOpen,
    selectedOpt,
    toggleMenu,
    handleSelectValue,
    handleSelectedOpt
  }
}