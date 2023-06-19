import ArticlePreview from "@/components/ArticlePages/ArticlePreview"

async function getData(slug: string) {
  const pageSize = 2
  const res = await fetch(
    `http://127.0.0.1:1337/api/news-articles?filters[slug][$eq]=${slug}`
  )

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

export default async function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getData(params.slug)

  console.log(data)

  return (
    <main>
      <section className="flex">
        <ArticlePreview articledata={data.data[0]} />
      </section>
    </main>
  )
}
