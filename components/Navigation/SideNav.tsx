"use client"

import React from "react"
import { SideNavConfig } from "@/mockdataconfigs/SideNavConfig"
import uppercaseNavItem from "@/utils/helpers/uppercaseNavItem"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { useScreenSize } from "@/hooks/useScreenSize"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Icons } from "@/components/icons"

import { Separator } from "../ui/separator"

export function SideNav() {
  // const { isMobileScreen } = useScreenSize()
  // const dynamicSheetSize = cn({
  //   default: !isMobileScreen,
  //   small: isMobileScreen,
  // }) as "full" | "default"

  return (
    <Sheet>
      <SheetTrigger>
        <Icons.menu className="ml-4" />
      </SheetTrigger>
      <SheetContent
        position="left"
        size="sm"
        className="left-0 overflow-y-auto"
        style={{ maxHeight: "100vh" }}
      >
        {SideNavConfig.sections.map((section, sectionIndex) => (
          <div key={section.name}>
            {section.items.map((navItem) => (
              <div
                key={navItem.name}
                className={`my-3 flex cursor-pointer items-center p-2${
                  navItem.name === "Login" ? "font-bold" : ""
                }`}
              >
                {navItem.icon && <navItem.icon size={14} />}
                {uppercaseNavItem(navItem).name}
              </div>
            ))}
            {sectionIndex < SideNavConfig.sections.length - 1 && (
              <Separator className="bg-gray-900" />
            )}
          </div>
        ))}
      </SheetContent>
    </Sheet>
  )
}
