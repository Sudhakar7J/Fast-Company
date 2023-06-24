"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MockCarouselData } from "@/mockdataconfigs/MockCarouselData"
import { motion } from "framer-motion"

import { useScreenSize } from "@/hooks/useScreenSize"

import { CarouselItem } from "./CarouselItem.1"
import { SponsoredCarouselItem } from "./SponsoredCarouselItem"

interface Article {
  id: number
  attributes: {
    title: string
    category: string
    description: string
    slug: string
    imageUrl: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    isSponsoredArticle: boolean
  }
}

interface PaginationData {
  pagination: {
    page: number
    pageCount: number
  }
}
interface LandingCarouselProps {
  articles: Article[]
  paginationData: PaginationData
}

export function LandingCarousel({
  articles,
  paginationData,
}: LandingCarouselProps) {
  const { isMobileScreen } = useScreenSize()
  const [highlightedArticle, setHighlightedArticle] = useState(articles[0].id)

  const onHighlightArticle = (id: React.SetStateAction<number>) => {
    if (isMobileScreen) {
      return
    }
    setHighlightedArticle(id)
  }

  console.log(articles)

  const selectedImage =
    articles?.find((article) => article.id === highlightedArticle)?.attributes
      ?.imageUrl?.data?.attributes.url ?? ""

  console.log(highlightedArticle, selectedImage)

  useEffect(() => {
    if (!articles.length) {
      return
    }

    const interval = setInterval(() => {
      setHighlightedArticle((prevState) => {
        const selectedIndex = prevState % articles.length

        return articles[selectedIndex].id
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [articles])

  return (
    <div className="h-screen min-w-full">
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative flex h-2/3 w-full justify-center "
        >
          <div className="h-1/3 w-full">
            <Image
              src={selectedImage}
              alt="logo"
              fill
              style={{ objectFit: "cover" }}
              className="contain"
            />
          </div>
        </motion.div>
      )}
      <div className="flex cursor-pointer flex-col md:grid md:grid-cols-4 md:gap-4">
        {articles.map(
          ({
            id,
            attributes: { title, category, description, slug, imageUrl },
          }) => (
            <Link key={id} href={`articles/${slug}`}>
              <CarouselItem
                {...{
                  id,
                  title,
                  category,
                  onHighlightArticle,
                  highlightedArticle,
                }}
                imageUrl={imageUrl}
              />
            </Link>
          )
        )}
      </div>
    </div>
  )
}

export default LandingCarousel
