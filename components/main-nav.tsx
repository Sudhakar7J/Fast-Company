import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { CldImage } from "next-cloudinary"

import { SideNav } from "./Navigation/SideNav"

export function MainNav() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex ">
          <SideNav />
          <Search href="/" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-1 items-center ">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Fast_Company_logo.svg/120px-Fast_Company_logo.svg.png?20180515163340"
          alt="Logo"
          width={120}
          height={28}
          className=" mx-auto cursor-pointer  "
        />
      </div>
    </>
  )
}
