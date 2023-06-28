import React from "react"

import useArticlesData from "@/hooks/useArticlesData"

import { ArticleContainer } from "../Categories/ArticleContainer"

export async function FurtherReading({
  categorySlug,
}: {
  categorySlug: string
}) {
  const { getArticlesByCategory } = useArticlesData()

  const { articlesData } = await getArticlesByCategory(categorySlug, "1")

  return (
    <div className="flex flex-col ">
      <div className="font-semibold  text-3xl">Further reading</div>
      {articlesData.data.map((articleData: any) => (
        <ArticleContainer
          articlecontainerdata={articleData}
          viewMode="HORIZONTAL"
        />
      ))}
    </div>
  )
}

export default FurtherReading
