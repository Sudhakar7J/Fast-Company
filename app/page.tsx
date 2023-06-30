import Link from "next/link"
import { UserButton } from "@clerk/nextjs"

import useArticlesData from "@/hooks/useArticlesData"
import { Separator } from "@/components/ui/separator"
import { ArticleContainer } from "@/components/Categories/ArticleContainer"
import CookieConsent from "@/components/Cookies/CookieConsent"
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

  const maingridArticles = isFirstPage
    ? [first, second, third, fourth]
    : [...allArticles]

  const gridArticles = isFirstPage ? [...rest] : [...allArticles]

  const paginationData = data.meta

  return (
    <main>
      <section>
        <div className="md:block hidden">
          {isFirstPage && (
            <>
              <LandingCarousel
                articles={[first, second, third, fourth]}
                paginationData={data.meta}
              />
              <Separator className="bg-black rounded h-0.5 my-10" />
            </>
          )}
        </div>
      </section>
      <section>
        {isFirstPage && (
          <>
            <div className="font-bold text-md uppercase md:hidden flex mt-16  items-center justify-center">
              Popular Articles
            </div>
            <div className="flex flex-wrap md:hidden ">
              {maingridArticles.map((articleData: any) => (
                <ArticleContainer articlecontainerdata={articleData} />
              ))}
            </div>
          </>
        )}
      </section>
      <section>
        {isFirstPage ? (
          <div className="flex font-bold text-md md:text-2xl uppercase items-center justify-center">
            Featured Articles
          </div>
        ) : (
          <div className="flex font-bold text-md md:text-2xl uppercase items-center justify-center mt-16">
            More popular articles
          </div>
        )}

        <div className="md:flex flex-wrap justify-center ">
          {gridArticles.map((articleData: any) => (
            <ArticleContainer articlecontainerdata={articleData} />
          ))}
        </div>
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
      <CookieConsent />
    </main>
  )
}
