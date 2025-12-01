import type { DropdownMenuProps } from "./dropdown-menu";

export function DropdownMenu({ children }: DropdownMenuProps) {
  return (
    <div className="bg-Neutral-800 rounded-md p-1.5 w-50 min-h-10 absolute right-0 top-12">
      <ul>
        { children }
      </ul>
    </div>
  )
}