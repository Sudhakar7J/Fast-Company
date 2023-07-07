"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { montfont, playfairDisplay } from "@/fonts/fonts"

interface ArticleContainerData {
  id: number
  attributes: {
    title: string
    slug: string
    imageUrl: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string
            }
          }
        }
      }
    }
    category: {
      data: {
        attributes: {
          categoryname: string
        }
      }
    }
  }
}

interface PaginationData {
  pagination: {
    page: number
    pageCount: number
  }
}

interface ArticleContainerProps {
  articlecontainerdata: ArticleContainerData
  viewMode?: "HORIZONTAL"
}

export function ArticleContainer({
  articlecontainerdata,
  viewMode,
}: ArticleContainerProps) {
  const categoryname =
    articlecontainerdata?.attributes?.category?.data?.attributes?.categoryname

  const isHorizontalViewMode = viewMode === "HORIZONTAL"

  return (
    <div className="flex py-2 min-w-width">
      <Link
        className={`flex h-min ${
          isHorizontalViewMode ? "flex-row" : "flex-col flex-wrap  px-6"
        }`}
        href={`/articles/${articlecontainerdata.attributes.slug}`}
        passHref
      >
        <Image
          src={
            articlecontainerdata?.attributes?.imageUrl?.data?.attributes
              ?.formats?.large?.url
          }
          alt="Article Image"
          width={isHorizontalViewMode ? 120 : 600}
          height={isHorizontalViewMode ? 90 : 100}
          style={{ objectFit: "cover" }}
          className="contain h-auto w-full md:h-3/6 md:w-auto  "
        />
        <div
          className={`flex-wrap text-sm md:text-2xl font-bold py-4 text-left  md:flex  overflow-hidden  ${
            isHorizontalViewMode ? "ml-4 truncate " : "text-ellipsis max-w-lg "
          }`}
          style={isHorizontalViewMode ? montfont.style : playfairDisplay.style}
        >
          {articlecontainerdata.attributes.title}
        </div>
      </Link>
    </div>
  )
}
