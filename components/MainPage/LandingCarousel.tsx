"use client"

import React, { useState } from "react"
import Image from "next/image"
import { MockCarouselData } from "@/mockdataconfigs/MockCarouselData"

import { Separator } from "../ui/separator"

export function LandingCarousel() {
  const [selectedCategory, setSelectedCategory] = useState("impact")

  const handleCategoryClick = (category: React.SetStateAction<string>) => {
    setSelectedCategory(category)
  }

  const selectedImage = MockCarouselData().find(
    (carouselItem) => carouselItem.category === selectedCategory
  )?.image

  return (
    <div className="min-h-screen min-w-full">
      <div className="relative flex h-1/3 w-full justify-center md:m-0 md:h-2/3 md:w-full">
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="logo"
            fill
            style={{ objectFit: "cover" }}
            className="contain"
          />
        )}
      </div>
      <div className="flex cursor-pointer flex-col md:grid md:grid-cols-4 md:gap-4">
        {MockCarouselData().map((carouselItem, index) => (
          <React.Fragment key={carouselItem.title}>
            <div
              className="flex bg-white p-4  md:border-gray-500 md:opacity-30 md:hover:border-t-8 md:hover:bg-gray-100 md:hover:opacity-100"
              onClick={() => handleCategoryClick(carouselItem.category)}
            >
              <div className="flex w-2/3 grow flex-col md:w-max">
                <div className="font-bold uppercase text-gray-700">
                  {carouselItem.category}
                </div>
                <div className="flex text-lg font-bold leading-5 md:text-2xl md:leading-none">
                  {carouselItem.title}
                </div>
              </div>
              <div className="relative my-auto w-1/3">
                <div className=" relative items-center justify-center md:hidden ">
                  <Image
                    src={carouselItem.image}
                    alt={carouselItem.title}
                    width={1000}
                    height={200}
                  />
                </div>
              </div>
            </div>
            <Separator className="md:hidden" />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default LandingCarousel
