import { LucideIcon } from "lucide-react"

const uppercaseNavItem = (
  navItem:
    | { name: string; label: string; isBold: boolean }
    | { name: string; label: string; icon: LucideIcon }
    | { name: string; label: string; icon?: undefined }
) => {
  return {
    ...navItem,
    name: navItem.name.toUpperCase(),
  }
}

export default uppercaseNavItem
