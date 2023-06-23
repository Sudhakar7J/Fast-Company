import React from "react"

import { ArticleCard } from "./ArticleCard"

interface ArticleCardData {
  id: number
  attributes: {
    title: string
    imageUrl: {
      data: {
        attributes: {}
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

interface ArticleCardPreviewProps {
  articlecarddata: ArticleCardData
}

export function ArticleCardPreview({
  articlecarddata,
}: ArticleCardPreviewProps) {
  return (
    <div>
      <ArticleCard
        key={articlecarddata.attributes.title}
        title={articlecarddata.attributes.title}
        category={articlecarddata.attributes.category}
        imageUrl={
          "https://res.cloudinary.com/djuoltfrr/image/upload/v1687447652/uploads/small_65535_52509931958_99bc2bf278_b_640_480_nofilter_e3645b8ada.jpg"
        }
      />
    </div>
  )
}

export default ArticleCardPreview
