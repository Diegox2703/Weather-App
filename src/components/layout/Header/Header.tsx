import { LogoIcon } from '@/components/ui'
import { UNITS_MENU_ITEMS } from '@/constants'
import { UnitsMenu } from './UnitsMenu'
import { styles } from './styles'

export function Header() {
  return (
    <header className={styles}>
      <LogoIcon/>
      <UnitsMenu unitItems={UNITS_MENU_ITEMS}/>
    </header>
  )
}