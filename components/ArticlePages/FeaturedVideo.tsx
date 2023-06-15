import { Separator } from "../ui/separator"

export function FeaturedVideo({
  featuredText,
  videoUrl,
  description,
}: {
  featuredText: string
  videoUrl: string
  description: string
}) {
  return (
    <div className="flex h-3/6 flex-col items-center justify-center pt-40">
      <Separator className=" border border-black bg-black" />
      <div className="py-2 text-2xl  font-semibold uppercase text-black">
        {featuredText}
      </div>
      <video src={videoUrl} controls />
      <div className="font-md py-4 font-bold text-black">{description}</div>
      <Separator className="mt-6 border" />
    </div>
  )
}

export default FeaturedVideo
