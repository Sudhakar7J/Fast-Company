import useArticlesData from "@/hooks/useArticlesData"
import ArticlePreview from "@/components/ArticlePages/ArticlePreview"
import FurtherReading from "@/components/ArticlePages/FurtherReading"

export default async function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const { getArticle } = useArticlesData()
  const data = await getArticle(params.slug)

  return (
    <main>
      <section className="flex">
        <ArticlePreview articledata={data.data[0]} />
      </section>
      <FurtherReading
        categorySlug={data.data[0].attributes.category.data.attributes.slug}
      />
    </main>
  )
}
