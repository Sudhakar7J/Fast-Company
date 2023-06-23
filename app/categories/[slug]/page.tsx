import { ArticleContainer } from "@/components/Categories/ArticleContainer"
import { HoverSideNav } from "@/components/Navigation/HoverSideNav"

async function getData(slug: string) {
  const pageSize = 2
  const articlesRes = await fetch(
    `http://127.0.0.1:1337/api/news-articles?filters[category][slug][$eq]=${slug}&populate=*`
  )

  const categoryRes = await fetch(
    `http://127.0.0.1:1337/api/categories?filters[slug][$eq]=${slug}`
  )

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!articlesRes.ok || !categoryRes.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  const articlesResponseJson = await articlesRes.json()

  const categoriesResponseJson = await categoryRes.json()

  return {
    articlesData: articlesResponseJson,
    categoriesData: categoriesResponseJson,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string }
}) {
  const { articlesData, categoriesData } = await getData(params.slug)

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
    </main>
  )
}
