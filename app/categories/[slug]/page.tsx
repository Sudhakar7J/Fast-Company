import Link from "next/link"

import useArticlesData from "@/hooks/useArticlesData"
import { ArticleContainer } from "@/components/Categories/ArticleContainer"

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
    <main className="h-screen w-screen">
      <section className="md:flex flex-col items-center justify-center pt-28 ">
        <div className="flex flex-col items-center mb-10">
          <div className="text-xl md:text-4xl font-bold uppercase">
            {categoryName}
          </div>
          <div className="text-gray-400">{categoryDescription} </div>
        </div>
        <div className=" md:flex flex-wrap md:px-6">
          {articlesData.data.map((articleData: any) => (
            <ArticleContainer articlecontainerdata={articleData} />
          ))}
        </div>
      </section>
      <div className="mt-4 flex justify-center text-xl font-semibold py-4 mb-10">
        {paginationData?.pagination?.page <
          paginationData?.pagination?.pageCount && (
          <Link
            className="mx-10 border-2 border-black bg-amber-500 rounded-xl px-2"
            href={`/categories/${categoryName}?page=${
              paginationData?.pagination?.page + 1
            }`}
          >
            More Articles
          </Link>
        )}
        {paginationData?.pagination?.page > 1 && (
          <Link
            className="mx-10 border-2 border-black bg-amber-500 rounded-xl px-2"
            href={`/categories/${categoryName}?page=${
              paginationData?.pagination?.page - 1
            }`}
          >
            Previous Page
          </Link>
        )}
      </div>
    </main>
  )
}
