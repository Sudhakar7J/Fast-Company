import Link from "next/link"
import { useRouter } from "next/navigation"
import { useQueryClient } from "react-query"

import { ArticleContainer } from "@/components/Categories/ArticleContainer"
import LandingCarousel from "@/components/MainPage/LandingCarousel"

async function getData(pageNumber: string) {
  const currentPage = pageNumber ?? 1

  const pageSize = 8
  const res = await fetch(
    `http://127.0.0.1:1337/api/news-articles?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`
  )

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  const responseJson = await res.json()

  return responseJson
}

export default async function IndexPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const data = await getData(searchParams?.page ?? "1")

  const isFirstPage = !searchParams!.page || searchParams?.page === "1"

  const allArticles = [...data.data]

  const [first, second, third, fourth, ...rest] = allArticles

  const gridArticles = isFirstPage ? [...rest] : [...allArticles]
  const paginationData = data.meta // Define paginationData

  return (
    <main>
      <section>
        {isFirstPage && (
          <LandingCarousel
            articles={[first, second, third, fourth]}
            paginationData={data.meta}
          />
        )}
      </section>
      <section className="flex flex-wrap justify-center">
        {gridArticles.map((articleData: any) => (
          <ArticleContainer articlecontainerdata={articleData} />
        ))}
      </section>

      <div className="mt-4 flex justify-center">
        {paginationData?.pagination?.page <
          paginationData?.pagination?.pageCount && (
          <Link href={`/?page=${paginationData?.pagination?.page + 1}`}>
            Next
          </Link>
        )}
        {paginationData?.pagination?.page > 1 && (
          <Link href={`/?page=${paginationData?.pagination?.page - 1}`}>
            Previous
          </Link>
        )}
      </div>
    </main>
  )
}
