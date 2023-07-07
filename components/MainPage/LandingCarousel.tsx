"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { useScreenSize } from "@/hooks/useScreenSize"

import { CarouselItem } from "./CarouselItem"
import { SponsoredCarouselItem } from "./SponsoredCarouselItem"

interface Article {
  id: number
  attributes: {
    title: string
    category: {
      data: {
        attributes: {
          categoryname: string
          slug: string
        }
      }
    }
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
  mobileview?: "MOBILEVIEW"
}

export function LandingCarousel({
  articles,
  paginationData,
  mobileview,
}: LandingCarouselProps) {
  const { isMobileScreen } = useScreenSize()
  const [highlightedArticle, setHighlightedArticle] = useState(articles[0].id)

  const onHighlightArticle = (id: React.SetStateAction<number>) => {
    if (isMobileScreen) {
      return
    }
    setHighlightedArticle(id)
  }

  const selectedImage =
    articles?.find((article) => article.id === highlightedArticle)?.attributes
      ?.imageUrl?.data?.attributes.url ?? ""

  useEffect(() => {
    if (!articles.length) {
      return
    }

    const interval = setInterval(() => {
      setHighlightedArticle((prevState) => {
        const currentIndex = articles.findIndex(
          (article) => article.id === prevState
        )
        const nextIndex = (currentIndex + 1) % articles.length
        return articles[nextIndex].id
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [articles])

  const isMobileViewMode = mobileview === "MOBILEVIEW"

  return (
    <div className="min-h-full md:h-screen min-w-full">
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative h-4/5 w-full justify-center hidden md:block"
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
      <div className="flex cursor-pointer flex-col md:grid md:grid-cols-4 md:gap-4 md:px-28 mt-16 md:mt-0">
        {articles.map(
          ({
            id,
            attributes: { title, category, description, slug, imageUrl },
          }) => (
            <Link key={id} href={`articles/${slug}`} passHref>
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
