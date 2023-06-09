/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client"

import { useState } from "react"
import Link from "next/link"

import { MainNav } from "@/components/main-nav"

import { HoverSideNav } from "./Navigation/HoverSideNav"

export function SiteHeader() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-black bg-opacity-40">
      <div className="flex h-16 w-max">
        <MainNav />
      </div>
      <header
        className={`sticky top-0 z-40 h-6 w-full border-b bg-black ${
          isHovered ? "" : "hidden"
        } lg:inline-block`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HoverSideNav />
      </header>
    </header>
  )
}
