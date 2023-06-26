import Link from "next/link"

import useArticlesData from "@/hooks/useArticlesData"
import { ArticleContainer } from "@/components/Categories/ArticleContainer"
import { HoverSideNav } from "@/components/Navigation/HoverSideNav"

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { page: string }
}) {
  const { getArticlesByCategory, getArticles } = useArticlesData()
  const { articlesData, categoriesData } = await getArticlesByCategory(
    params.slug,
    searchParams.page
  )

  const paginationData = articlesData.meta

  const categoryName = categoriesData?.data?.[0]?.attributes?.categoryname
  const categoryDescription =
    categoriesData?.data?.[0]?.attributes?.categorydescription

  return (
    <main>
      <section className="flex flex-col flex-wrap items-center justify-center pt-28">
        <div className="flex flex-col items-center mb-10">
          <div className="text-4xl font-bold uppercase">{categoryName}</div>
          <div className="text-gray-400">{categoryDescription} </div>
        </div>
        <div className=" flex flex-wrap px-20">
          {articlesData.data.map((articleData: any) => (
            <ArticleContainer articlecontainerdata={articleData} />
          ))}
        </div>
      </section>
      <div className="mt-4 flex justify-center text-black">
        {paginationData?.pagination?.page <
          paginationData?.pagination?.pageCount && (
          <Link
            href={`/categories/${categoryName}?page=${
              paginationData?.pagination?.page + 1
            }`}
          >
            Next
          </Link>
        )}
        {paginationData?.pagination?.page > 1 && (
          <Link
            href={`/categories/${categoryName}?page=${
              paginationData?.pagination?.page - 1
            }`}
          >
            Previous
          </Link>
        )}
      </div>
    </main>
  )
}
