import React, { useState } from "react"
import Link from "next/link"
import { SideNavConfig } from "@/mockdataconfigs/SideNavConfig"
import uppercaseNavItem from "@/utils/helpers/uppercaseNavItem"

export function HoverSideNav() {
  const [selectedNavItem, setSelectedNavItem] = useState("")

  const filteredSections = SideNavConfig.sections.filter(
    (section) => section.name === "suits"
  )

  return (
    <div className="flex cursor-pointer items-center justify-around px-40">
      {filteredSections.map((section) => (
        <React.Fragment key={section.name}>
          {section.items.map((navItem) => (
            <div key={navItem.name} className="flex items-center">
              <Link
                href={`/categories/${navItem.name}`}
                passHref
                className={`group ml-2 flex text-sm ${
                  navItem.name === selectedNavItem
                    ? "cursor-pointer border-b-4 "
                    : ""
                }`}
                onClick={() => setSelectedNavItem(navItem.name)}
              >
                <span className=" cursor-pointer border-b-4 border-slate-300 border-opacity-0 text-white group-hover:border-b-4 group-hover:border-opacity-100">
                  {uppercaseNavItem(navItem).name}
                </span>
              </Link>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}
