import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function SponsoredCarouselItem({
  id,
  title,
  category,
  imageUrl,
}: {
  id: number
  title: string
  category: string
  imageUrl: string
}) {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false)

  return (
    <div
      className="relative flex  p-4 md:border-t-8"
      onMouseEnter={() => setIsPreviewVisible(true)}
      onMouseLeave={() => setIsPreviewVisible(false)}
    >
      <div className="absolute inset-0 z-10 bg-white ">
        <div className=" font-bold uppercase text-gray-700">{category}</div>
        <div className="flex text-lg font-bold leading-5 md:text-2xl md:leading-none">
          {title}
        </div>
      </div>
      <motion.div
        animate={{
          y: isPreviewVisible ? "-100%" : 0,
          transition: { ease: "easeIn", duration: 0.15 },
        }}
        className="absolute inset-1 flex w-full grow flex-col"
      >
        <Image src={imageUrl} alt={title} fill style={{ objectFit: "cover" }} />
      </motion.div>
    </div>
  )
}
