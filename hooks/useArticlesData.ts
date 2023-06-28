const useArticlesData = () => {
  async function getArticles(pageNumber: string) {
    const currentPage = pageNumber ?? 1

    const pageSize = 8
    const res = await fetch(
      `${process.env.STRAPI_BASE_URL}/news-articles?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`
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

  async function getArticlesByCategory(
    categorySlug: string,
    pageNumber: string,
    viewMode?: string
  ) {
    console.log(categorySlug, pageNumber)
    const currentPage = pageNumber ?? 1

    const isHorizontalViewMode = viewMode === "HORIZONTAL"
    const pageSize = isHorizontalViewMode ? 4 : 8

    const articlesRes = await fetch(
      isHorizontalViewMode
        ? `${process.env.STRAPI_BASE_URL}/news-articles?filters[category][slug][$notContainsi]=${categorySlug}&filters[viewMode][$nin]=${viewMode}&populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`
        : `${process.env.STRAPI_BASE_URL}/news-articles?filters[category][slug][$eq]=${categorySlug}&populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`
    )

    const categoryRes = await fetch(
      `${process.env.STRAPI_BASE_URL}/categories?filters[slug][$eq]=${categorySlug}`
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

  async function getArticle(slug: string) {
    const pageSize = 2
    const res = await fetch(
      `${process.env.STRAPI_BASE_URL}/news-articles?filters[slug][$eq]=${slug}&populate=*`
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

  return {
    getArticles,
    getArticlesByCategory,
    getArticle,
  }
}

export default useArticlesData
