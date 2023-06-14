import { useRouter } from "next/navigation"

import LandingCarousel from "@/components/MainPage/LandingCarousel"

async function getData(pageNumber: string | undefined) {
  const currentPage = pageNumber ?? 1
  const pageSize = 2
  const res = await fetch(
    `http://127.0.0.1:1337/api/news-articles?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=2`
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
  const data = await getData(searchParams?.page)

  return (
    <main>
      <section className="flex">
        <LandingCarousel articles={data.data} paginationData={data.meta} />
      </section>
    </main>
  )
}
