import { DropdownIcon, SettingsIcon } from '../../Icon'
import { BaseBtn } from '../BaseBtn'
import type { UnitSelectBtnProps } from './unit-select-btn.types'

export function UnitSelectBtn({...props}: UnitSelectBtnProps) {
  return (
    <BaseBtn {...props}>
        <SettingsIcon/>
        Units
        <DropdownIcon/>
    </BaseBtn>
  )
}
