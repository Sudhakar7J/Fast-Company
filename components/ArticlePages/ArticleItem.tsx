import React, { useMemo } from "react"
import Image from "next/image"
import Markdown from "markdown-to-jsx"

import { Separator } from "../ui/separator"
import SocialMediaShare from "./SocialMediaShare"

export function ArticleItem({
  title,
  category,
  description,
  content,
  imgUrl,
  author,
  photographer,
  updatedAtDate,
  updatedAtTime,
  viewcount,
}: {
  title: string
  category: string
  description: string
  imgUrl: string
  content: string
  photographer: string
  author: string
  updatedAtDate: string
  updatedAtTime: string
  viewcount: string
}) {
  return (
    <div className="flex flex-col items-center pt-40">
      <div className="w-full md:w-10/12">
        <div className="font-bold text-xs md:text-base">
          {updatedAtDate} | {updatedAtTime}
        </div>
        <div className=" text-md md:text-5xl font-bold">{title}</div>
        <div className="py-4 text-sm md:text-xl font-medium text-gray-500">
          {description}
        </div>
        <div className="relative flex w-full flex-col items-start pt-6">
          <div className="relative">
            <Image
              src={imgUrl}
              alt="carousel-item"
              width={2000}
              height={200}
              style={{ objectFit: "cover" }}
              className="contain"
            />
          </div>
          <div className=" text-xs md:text-md pt-2 font-medium text-gray-700">
            [Photos: {photographer}] [Viewcount: {viewcount}]
          </div>
          <Separator className="my-6 bg-black" />
        </div>
        <div className="flex flex-row md:pl-20">
          <div className="sticky top-20 h-screen hidden md:block">
            <SocialMediaShare />
          </div>
          <div className="relative flex w-full flex-col items-start md:pl-10 ">
            <div className=" text-xs md:text-md flex font-bold text-slate-700">
              BY {author}
            </div>
            <div className="my-4 text-justify text-sm leading-1 md:leading-2 md:text-lg ">
              <Markdown>{content}</Markdown>
            </div>
          </div>
          <div className="hidden">{category}</div>
        </div>
      </div>
      <Separator className="my-4 bg-black" />
    </div>
  )
}
