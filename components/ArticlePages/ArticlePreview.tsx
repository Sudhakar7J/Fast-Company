import React from "react"
import { format, formatISO } from "date-fns"
import Markdown from "markdown-to-jsx"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

import { ArticleItem } from "./ArticleItem"
import FeaturedVideo from "./FeaturedVideo"
import FurtherReading from "./FurtherReading"

interface Articledata {
  id: number
  attributes: {
    title: string
    category: string
    description: string
    imgUrl: string
    content: string
    photographer: string
    author: string
    updatedAt: string
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
      <div className="flex items-center justify-center">
        <div className="min-h-screen w-3/5">
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
          />
          <div>
            <FurtherReading
              image={
                "https://images.unsplash.com/photo-1686818360329-2aa066bf7565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              }
              title={
                "In this Massachusetts neighborhood, nearly every home is switching to geothermal energy"
              }
            />
          </div>
        </div>
        <div className="flex w-1/4">
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
