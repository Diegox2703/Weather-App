import type { DropdownMenuProps } from "./dropdown-menu";
import { dropdownMenuStyles } from "./dropdown-menu.styles";

export function DropdownMenu({ children, className }: DropdownMenuProps) {
  return (
    <div className={ dropdownMenuStyles({ className }) }>
      <ul>
        { children }
      </ul>
    </div>
  )
}