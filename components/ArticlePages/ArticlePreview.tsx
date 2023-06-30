import React from "react"
import { format, formatISO } from "date-fns"
import Markdown from "markdown-to-jsx"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

import { Separator } from "../ui/separator"
import { ArticleItem } from "./ArticleItem"
import FeaturedVideo from "./FeaturedVideo"

interface Articledata {
  id: number
  attributes: {
    title: string
    category: {
      data: {
        attributes: {
          categoryname: string
        }
      }
    }
    description: string
    imgUrl: string
    content: string
    photographer: string
    author: string
    updatedAt: string
    viewcount: string
    imageUrl: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
}

interface ArticlePreviewProps {
  articledata: Articledata
}

export function ArticlePreview({ articledata }: ArticlePreviewProps) {
  const formattedDate = format(
    new Date(articledata.attributes.updatedAt),
    "yyyy-MM-dd"
  )
  const formattedTime = format(
    new Date(articledata.attributes.updatedAt),
    "HH:mm:ss"
  )

  return (
    <div>
      <div className="flex items-center justify-center px-4 md:container">
        <div className="min-h-screen md:w-3/5">
          <ArticleItem
            title={articledata.attributes.title}
            category={
              articledata.attributes.category?.data?.attributes?.categoryname ??
              ""
            }
            description={articledata.attributes.description}
            imgUrl={
              articledata.attributes.imageUrl?.data?.attributes?.url ?? ""
            }
            content={articledata.attributes.content}
            author={articledata.attributes.author}
            photographer={articledata.attributes.photographer}
            updatedAtDate={formattedDate}
            updatedAtTime={formattedTime}
            viewcount={articledata.attributes.viewcount}
          />
        </div>

        <div className="hidden md:block md:w-1/4">
          <FeaturedVideo
            featuredText={"FEATURED VIDEO"}
            videoUrl={
              "https://www.youtube.com/watch?v=599ogMbXIyA&ab_channel=Devistry"
            }
            description={
              "The ACLU's Amber Hikes shares how businesses can support LGBTQ+ Communities"
            }
          />
        </div>
      </div>
    </div>
  )
}

export default ArticlePreview
