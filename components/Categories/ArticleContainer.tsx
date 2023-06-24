import React from "react"
import Image from "next/image"
import Link from "next/link"

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
}

export function ArticleContainer({
  articlecontainerdata,
}: ArticleContainerProps) {
  const categoryname =
    articlecontainerdata?.attributes?.category?.data?.attributes?.categoryname

  return (
    <div>
      <Link
        className="flex flex-col flex-wrap items-center justify-center p-4"
        href={`/articles/${articlecontainerdata.attributes.slug}`}
      >
        <Image
          src={
            articlecontainerdata?.attributes?.imageUrl?.data?.attributes
              ?.formats?.large?.url
          }
          alt="Article Image"
          width={600}
          height={100}
          style={{ objectFit: "cover" }}
          className="contain"
        />
        <div className="flex-wrap text-lg font-bold">
          {articlecontainerdata.attributes.title}
        </div>
      </Link>
    </div>
  )
}
