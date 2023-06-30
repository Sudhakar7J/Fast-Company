import React from "react"

import useArticlesData from "@/hooks/useArticlesData"

import { ArticleContainer } from "../Categories/ArticleContainer"
import { Separator } from "../ui/separator"

export async function FurtherReading({
  categorySlug,
}: {
  categorySlug: string
}) {
  const { getArticlesByCategory } = useArticlesData()

  const viewMode = "HORIZONTAL" // Set the desired view mode here

  const { articlesData } = await getArticlesByCategory(
    categorySlug,
    "1",
    viewMode
  )
  const paginationData = articlesData.meta

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col font-bold  text-lg">Further Reading:</div>
      {articlesData.data.map((articleData: any) => (
        <ArticleContainer
          articlecontainerdata={articleData}
          viewMode="HORIZONTAL"
        />
      ))}
      <div className="flex flex-col py-10">
        <Separator className="bg-black" />
      </div>
    </div>
  )
}

export default FurtherReading
