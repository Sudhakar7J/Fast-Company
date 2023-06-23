import { useRouter } from "next/navigation"
import { useQueryClient } from "react-query"

import { ArticleContainer } from "@/components/Categories/ArticleContainer"
import LandingCarousel from "@/components/MainPage/LandingCarousel"

async function getData(slug: string) {
  const pageSize = 2
  const res = await fetch(`http://127.0.0.1:1337/api/news-articles?populate=*`)

  console.log(res)
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
  params,
}: {
  params: { slug: string }
}) {
  const data = await getData(params.slug)

  console.log(data)

  return (
    <main>
      <section>
        <LandingCarousel articles={data.data} paginationData={data.meta} />
      </section>
      <section className="flex flex-wrap justify-center">
        {data.data.map((articleData: any) => (
          <ArticleContainer articlecontainerdata={articleData} />
        ))}
      </section>
    </main>
  )
}
