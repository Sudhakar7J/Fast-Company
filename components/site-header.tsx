"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

import { MainNav } from "@/components/main-nav"

import { HoverSideNav } from "./Navigation/HoverSideNav"

export function SiteHeader() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <header className="fixed top-0 z-40 w-full ">
        <div
          className="flex h-16 max-w-full items-center bg-black bg-opacity-40"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <MainNav />
        </div>
        <div className="hidden lg:block">
          <AnimatePresence>
            {isHovered && (
              <motion.header
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1, originY: 0 }}
                exit={{
                  opacity: 0,
                  scaleY: 0,
                  originY: 0,
                  transition: { delay: 4 },
                }}
                className="w-full bg-black "
              >
                <HoverSideNav />
              </motion.header>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  )
}
