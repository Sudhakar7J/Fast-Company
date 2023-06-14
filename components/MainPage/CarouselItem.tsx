"use client"

import { useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { Separator } from "../ui/separator"

export function CarouselItem({
  id,
  title,
  category,
  imageUrl,
  onHighlightArticle,
  highlightedArticle,
}: {
  id: number
  title: string
  category: string
  imageUrl: string
  highlightedArticle: number
  onHighlightArticle: (id: number) => void
}) {
  const isSelectedArticle = useMemo(() => {
    return id === highlightedArticle
  }, [id, highlightedArticle])

  return (
    <>
      <motion.div
        initial={{ borderColor: "transparent", backgroundColor: "white" }}
        animate={{
          borderColor: isSelectedArticle ? "gray" : "transparent",
          backgroundColor: isSelectedArticle ? "lightgray" : "white",
          opacity: isSelectedArticle ? 1 : 0.3,
          transition: { ease: "easeInOut" },
        }}
        className="flex p-4 md:border-t-8"
        onMouseEnter={() => onHighlightArticle(id)}
      >
        <div className="flex w-2/3 grow flex-col pr-6 md:w-max md:pr-0">
          <div className="font-bold uppercase text-gray-700">{category}</div>
          <div className="flex text-lg font-bold leading-5 md:text-2xl md:leading-none">
            {title}
          </div>
        </div>
        <div className="relative my-auto w-1/3">
          <div className="relative items-center justify-center md:hidden ">
            <Image
              src={imageUrl}
              alt="carousel-item"
              width={1000}
              height={200}
            />
          </div>
        </div>
      </motion.div>
      <Separator className="md:hidden" />
    </>
  )
}
