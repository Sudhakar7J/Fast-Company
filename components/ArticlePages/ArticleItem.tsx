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
}) {
  return (
    <div className="flex flex-col items-center pt-40">
      <div className="w-10/12">
        <div className="font-bold">
          {updatedAtDate} | {updatedAtTime}
        </div>
        <div className="text-5xl font-bold">{title}</div>
        <div className="py-4 text-xl font-medium text-gray-500">
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
          <div className="text-md pt-2 font-medium text-gray-700">
            [Photos: {photographer}]
          </div>
          <Separator className="my-6 bg-black" />
        </div>
        <div className="flex flex-row pl-20">
          <div className="sticky top-20 h-screen">
            <SocialMediaShare />
          </div>
          <div className="relative flex w-full flex-col items-start pl-10 ">
            <div className="text-md flex font-bold text-slate-700">
              BY {author}
            </div>
            <div className="my-4 text-justify text-lg ">
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
