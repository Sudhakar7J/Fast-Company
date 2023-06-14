"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MockCarouselData } from "@/mockdataconfigs/MockCarouselData"
import { motion } from "framer-motion"
import { CldImage } from "next-cloudinary"

import { useScreenSize } from "@/hooks/useScreenSize"

import { CarouselItem } from "./CarouselItem"
import { SponsoredCarouselItem } from "./SponsoredCarouselItem"

export function LandingCarousel({ articles, paginationData }: any) {
  const { isMobileScreen } = useScreenSize()
  const [highlightedArticle, setHighlightedArticle] = useState(1)
  const [allArticles, setAllArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(2)

  const onHighlightArticle = (id: React.SetStateAction<number>) => {
    if (isMobileScreen) {
      return
    }
    setHighlightedArticle(id)
  }

  const selectedImage = MockCarouselData.find(
    (carouselItem) => carouselItem.id === highlightedArticle
  )?.imageUrl

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedArticle((prevState) => {
        const selectedIndex = prevState % MockCarouselData.length

        return MockCarouselData[selectedIndex].id
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen min-w-full">
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative flex h-1/3 w-full justify-center md:m-0 md:h-2/3 md:w-full"
        >
          <Image
            src={selectedImage}
            alt="logo"
            fill
            style={{ objectFit: "cover" }}
            className="contain"
          />
        </motion.div>
      )}
      <div className="flex cursor-pointer flex-col md:grid md:grid-cols-4 md:gap-4">
        {articles.map(
          ({
            id,
            attributes: {
              title,
              category,
              description,
              imageUrl: {
                data: {
                  attributes: {
                    formats: {
                      small: { url },
                    },
                  },
                },
              },
              isSponsoredArticle,
            },
          }) =>
            isSponsoredArticle ? (
              <SponsoredCarouselItem
                key={id}
                {...{
                  id,
                  title,
                  category,
                }}
                imageUrl={url}
              />
            ) : (
              <CarouselItem
                key={id}
                {...{
                  id,
                  title,
                  category,

                  onHighlightArticle,
                  highlightedArticle,
                }}
                imageUrl={url}
              />
            )
        )}
      </div>
      <div className="mt-4 flex justify-center">
        {paginationData?.pagination?.page <
          paginationData?.pagination?.pageCount && (
          <Link href={`/?page=${paginationData?.pagination?.page + 1}`}>
            Next
          </Link>
        )}
        {paginationData?.pagination?.page > 1 && (
          <Link href={`/?page=${paginationData?.pagination?.page - 1}`}>
            Previous
          </Link>
        )}
      </div>
    </div>
  )
}

export default LandingCarousel
