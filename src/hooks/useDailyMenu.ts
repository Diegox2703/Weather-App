import type { DailyMenuProps } from '@/types'
import { useState } from 'react'

export const useDailyMenu = ({ days, placeholder, value, onChange }: DailyMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOpt, setSelectedOpt] = useState('')
  const openMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

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
    onChange(value)
  }

  return {
    isOpen,
    selectedOpt,
    openMenu,
    closeMenu,
    handleSelectValue,
    handleSelectedOpt
  }
}