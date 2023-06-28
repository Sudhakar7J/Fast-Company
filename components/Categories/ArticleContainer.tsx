import React from "react"
import Image from "next/image"
import Link from "next/link"
import { playfairDisplay } from "@/fonts/fonts"

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
    <div className="flex py-10">
      <Link
        className={`flex px-6 h-min ${
          isHorizontalViewMode ? "flex-row" : "flex-col flex-wrap"
        }`}
        href={`/articles/${articlecontainerdata.attributes.slug}`}
      >
        <Image
          src={
            articlecontainerdata?.attributes?.imageUrl?.data?.attributes
              ?.formats?.large?.url
          }
          alt="Article Image"
          width={isHorizontalViewMode ? 80 : 600}
          height={isHorizontalViewMode ? 60 : 100}
          style={{ objectFit: "cover" }}
          className="contain h-3/6"
        />
        <div
          className={`flex-wrap text-2xl font-bold py-4 text-justify truncate overflow-hidden text-ellipsis max-w-xl ${
            isHorizontalViewMode ? "ml-4" : ""
          }`}
          style={playfairDisplay.style}
        >
          {articlecontainerdata.attributes.title}
        </div>
      </Link>
    </div>
  )
}
