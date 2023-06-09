import React, { useState } from "react"
import { SideNavConfig } from "@/mockdataconfigs/SideNavConfig"
import uppercaseNavItem from "@/utils/helpers/uppercaseNavItem"

export function HoverSideNav() {
  const [selectedNavItem, setSelectedNavItem] = useState("Premium")

  const filteredSections = SideNavConfig.sections.filter(
    (section) => section.name === "suits"
  )

  return (
    <div className="flex items-center justify-around px-40">
      {filteredSections.map((section) => (
        <React.Fragment key={section.name}>
          {section.items.map((navItem) => (
            <div key={navItem.name} className="flex items-center">
              <span
                className={`group ml-2 flex text-sm ${
                  navItem.name === selectedNavItem
                    ? "cursor-pointer border-b-4 "
                    : ""
                }`}
                onClick={() => setSelectedNavItem(navItem.name)}
              >
                <span className="hover-name cursor-pointer border-slate-300 text-white group-hover:border-b-4">
                  {uppercaseNavItem(navItem).name}
                </span>
              </span>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}
