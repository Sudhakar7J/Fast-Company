import Link from "next/link"
import { UserButton } from "@clerk/nextjs"

import useArticlesData from "@/hooks/useArticlesData"
import { Separator } from "@/components/ui/separator"
import { ArticleContainer } from "@/components/Categories/ArticleContainer"
import LandingCarousel from "@/components/MainPage/LandingCarousel"

export default async function IndexPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const { getArticles } = useArticlesData()
  const data = await getArticles(searchParams?.page ?? "1")

  const isFirstPage = !searchParams!.page || searchParams?.page === "1"

  const allArticles = [...data.data]

  const [first, second, third, fourth, ...rest] = allArticles

  const gridArticles = isFirstPage ? [...rest] : [...allArticles]
  const paginationData = data.meta

  return (
    <main>
      <section>
        {isFirstPage && (
          <>
            <LandingCarousel
              articles={[first, second, third, fourth]}
              paginationData={data.meta}
            />
            <Separator className="bg-black rounded h-0.5 my-10" />
          </>
        )}
      </section>
      <section className="flex flex-wrap justify-center ">
        {gridArticles.map((articleData: any) => (
          <ArticleContainer articlecontainerdata={articleData} />
        ))}
      </section>

      <div className="mt-4 flex justify-center  text-xl font-semibold py-4 mb-10">
        {paginationData?.pagination?.page <
          paginationData?.pagination?.pageCount && (
          <Link
            className="mx-10 border-2 border-black bg-amber-500 rounded-xl px-2"
            href={`/?page=${paginationData?.pagination?.page + 1}`}
          >
            More Articles
          </Link>
        )}
        {paginationData?.pagination?.page > 1 && (
          <Link
            className="mx-10 border-2 border-black bg-amber-500 rounded-xl px-2"
            href={`/?page=${paginationData?.pagination?.page - 1}`}
          >
            Previous Page
          </Link>
        )}
      </div>
    </main>
  )
}
