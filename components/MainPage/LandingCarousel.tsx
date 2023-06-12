"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { MockCarouselData } from "@/mockdataconfigs/MockCarouselData"
import { motion } from "framer-motion"

import { useScreenSize } from "@/hooks/useScreenSize"

import { CarouselItem } from "./CarouselItem"
import { SponsoredCarouselItem } from "./SponsoredCarouselItem"

export function LandingCarousel() {
  const { isMobileScreen } = useScreenSize()
  const [highlightedArticle, setHighlightedArticle] = useState(1)

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
        {MockCarouselData.map(
          ({ title, id, imageUrl, category, isSponsoredArticle }) =>
            isSponsoredArticle ? (
              <SponsoredCarouselItem
                key={id}
                {...{
                  id,
                  title,
                  category,
                  imageUrl,
                }}
              />
            ) : (
              <CarouselItem
                key={id}
                {...{
                  id,
                  title,
                  category,
                  imageUrl,
                  onHighlightArticle,
                  highlightedArticle,
                }}
              />
            )
        )}
      </div>
    </div>
  )
}

export default LandingCarousel
