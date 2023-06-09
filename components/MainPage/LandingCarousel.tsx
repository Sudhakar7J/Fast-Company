import Image from "next/image"
import { MockCarouselData } from "@/mockdataconfigs/MockCarouselData"

export function LandingCarousel() {
  return (
    <div className="min-h-screen min-w-full ">
      <div className="relative flex w-full h-1/3 justify-center md:m-0 md:h-2/3 md:w-full">
        <Image
          src={
            "https://images.fastcompany.net/image/upload/w_1250,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2023/06/p-1-90907243-what-is-pm-2-5.webp"
          }
          alt="logo"
          fill
          style={{ objectFit: "cover" }}
          className="contain"
        />
      </div>
      <div className=" container flex cursor-pointer flex-col md:grid md:grid-cols-4 md:gap-4">
        {MockCarouselData().map((carouselItem) => (
          <div
            key={carouselItem.title}
            className="bg-white p-4 md:border-gray-500 md:opacity-30 md:hover:border-t-8 md:hover:bg-gray-100 md:hover:opacity-100 "
          >
            <div className="font-bold uppercase text-gray-700">
              {carouselItem.category}
            </div>
            <div className="text-xl font-bold md:text-2xl">
              {carouselItem.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LandingCarousel
