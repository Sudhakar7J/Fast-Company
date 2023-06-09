import { LucideIcon } from "lucide-react"

const uppercaseNavItem = (navItem: { name: string }) => {
  return {
    ...navItem,
    name: navItem.name.toUpperCase(),
  }
}

export default uppercaseNavItem
