"use client"

import { useMemo } from "react"
import Image from "next/image"
import { playfairDisplay } from "@/fonts/fonts"
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
  category: {
    data: {
      attributes: {
        categoryname: string
        slug: string
      }
    }
  }
  imageUrl: {
    data: {
      attributes: {
        url: string
      }
    }
  }
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
        className="flex px-4 py-2 md:border-t-8 h-full"
        onMouseEnter={() => onHighlightArticle(id)}
      >
        <div className="flex w-2/3 h-2/3 grow flex-col pr-6 md:w-max md:pr-0">
          {category?.data?.attributes?.categoryname && (
            <div className="font-bold uppercase text-gray-700 text-xs">
              {category?.data?.attributes?.categoryname}
            </div>
          )}

          <div
            className="flex text-sm font-bold leading-5 md:text-2xl md:leading-none text-ellipsis h-10 md:h-full md:overflow-visible"
            style={playfairDisplay.style}
          >
            {title}
          </div>
        </div>
        <div className="relative my-auto w-1/3">
          <div className="relative items-center justify-center md:hidden ">
            <Image
              src={imageUrl?.data?.attributes?.url}
              alt="carousel-item"
              width={1000}
              height={200}
              style={{ objectFit: "cover" }}
              className="contain"
            />
          </div>
        </div>
      </motion.div>
      <Separator className="md:hidden" />
    </>
  )
}
