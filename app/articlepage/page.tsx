"use client"

import { useRouter } from "next/navigation"
import { QueryClient, QueryClientProvider } from "react-query"

import ArticlePreview from "@/components/ArticlePages/ArticlePreview"

async function getData(pageNumber: string | undefined) {
  const pageSize = 2
  const res = await fetch(`http://localhost:1337/api/articlepages/${id}`)
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
const queryClient = new QueryClient()

export default async function ArticlePage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  // const router = useRouter()
  const data = await getData(searchParams?.page)

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <section className="flex">
          <ArticlePreview articlesdata={[]} articleId={data.id} />
        </section>
      </main>
    </QueryClientProvider>
  )
}
