import { DropdownMenu, DropdownPlaceItem, Input } from '@/components/ui'

export function PlaceSearchBar() {
  return (
    <div className='relative'>
      <Input placeholder='Search for a place...'/>
      {/* <DropdownMenu className='w-full top-14'>
        <DropdownPlaceItem countryCode='co' place='Bogota' country='Colombia'/>
        <DropdownPlaceItem countryCode='de' place='Berlin' country='Alemania'/>
        <DropdownPlaceItem countryCode='pe' place='Lima' country='Peru'/>
        <DropdownPlaceItem countryCode='jp' place='Tokio' country='Japon'/>
        <DropdownPlaceItem countryCode='es' place='Madrid' country='España'/>
      </DropdownMenu> */}
    </div>
  )
}