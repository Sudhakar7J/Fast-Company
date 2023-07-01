import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { CldImage } from "next-cloudinary"

import { SideNav } from "./Navigation/SideNav"

export function MainNav() {
  // const { user } = useUser()

  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex">
          <SideNav />
          <Search href="/" className="cursor-pointer" />
        </div>
      </div>
      <Link href="/" className="flex flex-1 items-center" passHref>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Fast_Company_logo.svg/120px-Fast_Company_logo.svg.png?20180515163340"
          alt="Logo"
          width={120}
          height={28}
          className=" mx-auto cursor-pointer contain"
          style={{ objectFit: "cover" }}
        />
      </Link>
      {/* <div className="flex items-center px-4 mx-4 text-white">
        {user ? (
          <>
            <div className=" px-6">
              <UserButton afterSignOutUrl="/" />
            </div>
          </>
        ) : (
          <SignInButton />
        )}
      </div> */}
    </>
  )
}
