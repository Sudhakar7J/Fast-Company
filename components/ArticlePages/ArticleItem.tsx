import React, { useMemo } from "react"
import Image from "next/image"

import { Separator } from "../ui/separator"
import SocialMediaShare from "./SocialMediaShare"

export function ArticleItem({
  title,
  titlecontent,
  category,
  description,
  imgUrl,
  author,
  photographer,
}: {
  title: string
  titlecontent: string
  category: string
  description: string
  imgUrl: string
  author: string
  photographer: string
}) {
  // Function to generate random number within a range
  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  // Function to generate random lorem ipsum paragraph
  const generateLoremIpsum = () => {
    // You can replace this with any lorem ipsum generator logic
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor purus ac dolor accumsan, id volutpat leo feugiat. Integer volutpat libero vitae massa maximus mattis. Phasellus non nibh sit amet lacus bibendum luctus. Nullam in vestibulum metus, sed lobortis lectus. Proin ac sapien placerat, finibus erat a, scelerisque justo. Fusce quis sapien tincidunt, tempor mi vitae, efficitur turpis. Praesent luctus leo at purus tincidunt, eget auctor lacus pharetra. Sed tempus magna ac sem vulputate tempus. Nullam ultricies risus purus, ac efficitur orci vestibulum id. Sed dapibus dictum enim, eu scelerisque nunc consequat sit amet. Etiam nec lacus turpis."
  }

  // Ensure a minimum of 5 paragraphs
  let paragraphs = description.split("\n")
  while (paragraphs.length < 5) {
    paragraphs.push(generateLoremIpsum())
  }

  // Shuffle the images randomly
  const shuffledImages = Array(4)
    .fill(null)
    .map((_, index) => (
      <div className="relative my-8" key={index}>
        <Image
          src={`https://picsum.photos/800/400?random=${getRandomInt(1, 100)}`}
          alt="description-image"
          width={800}
          height={400}
        />
      </div>
    ))
    .sort(() => Math.random() - 0.5)

  return (
    <div className="flex flex-col items-center pt-40">
      <div className="w-10/12">
        <div className="text-5xl font-bold">{title}</div>
        <div className="py-4 text-xl font-medium text-gray-500">
          {titlecontent}
        </div>
        <div className="relative flex w-full flex-col items-start pt-6">
          <div className="relative">
            <Image src={imgUrl} alt="carousel-item" width={2000} height={200} />
          </div>
          <div className="text-md pt-2 font-medium text-gray-700">
            [Photos: {photographer}]
          </div>
          <Separator className="my-6 bg-black" />
        </div>
        <div className="flex flex-row pl-20">
          <div className="sticky top-20 h-screen">
            <SocialMediaShare />
          </div>
          <div className="relative flex w-full flex-col items-start pl-10 ">
            <div className="text-md flex font-bold text-slate-700">
              BY {author}
            </div>

            {/* Render paragraphs and images */}
            {paragraphs.map((paragraph: string, index: number) => (
              <React.Fragment key={index}>
                <div className="my-4 text-justify text-xl ">{paragraph}</div>
                {shuffledImages[index]}
              </React.Fragment>
            ))}
          </div>
          <div className="hidden">{category}</div>
        </div>
      </div>
      <Separator className="my-4 bg-black" />
    </div>
  )
}
