import React from "react"
import { Link } from "lucide-react"

import { ArticleItem } from "./ArticleItem"
import FeaturedVideo from "./FeaturedVideo"
import FurtherReading from "./FurtherReading"

interface articledata {
  id: number
  attributes: {
    title: string
    category: string
    description: string
    imageUrl: {
      data: {
        attributes: {}
      }
    }
    isSponsoredArticle: boolean
  }
}

interface ArticlePreviewProps {
  articlesdata: articledata[]
  articleId: string
}
export function ArticlePreview({
  articlesdata,
  articleId,
}: ArticlePreviewProps) {
  const articleUrl = `/articlepage/${articleId}` // Construct the correct URL

  return (
    <Link href={articleUrl}>
      <div>
        <div className="flex items-center justify-center">
          <div className="min-h-screen w-3/5">
            <ArticleItem
              title={"Inside the studio where Marvel superhero shoes are made"}
              category={"asfasfasf"}
              description={
                "When walking into the custom shoemaking shop of Jitterbug Boy Original Footwear in Toronto, the air smells of leather, wood, and glue. Pairs of shoes and boots hang down from a 100-year-old wood ceiling. As Jeff Churchill, Jitterbug Boy’s founder and owner, shows me around the shop, I recognize on the shelves prototypes of superhero boots from a whole array of Marvel movies and a pair of red hoof boots, later recreated for the Lt. Saru character from Star Trek: Discovery."
              }
              imgUrl={
                "https://images.fastcompany.net/image/upload/w_1250,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2023/06/p-1-90909080-shoe-wardrobe.webp"
              }
              author={"DORI TUNSTALL"}
              photographer={"Jeff Richards"}
              titlecontent={
                "After 18 years of creating bespoke shoes for some of the most recognizable characters on screen and stage, custom-shoemaking shop Jitterbug Boy Original Footwear is closing down."
              }
            />
            <div>
              <FurtherReading
                image={
                  "https://images.unsplash.com/photo-1686818360329-2aa066bf7565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                }
                title={
                  "In this Massachusetts neighborhood, nearly every home is switching to geothermal energy"
                }
              />
            </div>
          </div>
          <div className=" flex w-1/4">
            <FeaturedVideo
              featuredText={"FEATURED VIDEO"}
              videoUrl={
                "https://www.youtube.com/watch?v=599ogMbXIyA&ab_channel=Devistry"
              }
              description={
                "The ACLU's Amber Hikes shares how businesses can support LGBTQ+ Communities"
              }
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ArticlePreview
