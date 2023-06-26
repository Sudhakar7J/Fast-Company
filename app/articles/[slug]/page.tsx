import useArticlesData from "@/hooks/useArticlesData"
import ArticlePreview from "@/components/ArticlePages/ArticlePreview"

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
    </main>
  )
}
