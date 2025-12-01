import { LogoIcon } from '@/components/ui'
import { UNITS } from '@/constants'
import { UnitsMenu } from './UnitsMenu'

export function Header() {
  return (
    <header className='flex items-center justify-between my-10'>
      <LogoIcon/>
      <UnitsMenu unitItems={UNITS}/>
    </header>
  )
}