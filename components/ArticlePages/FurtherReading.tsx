import Image from "next/image"

import { Separator } from "../ui/separator"

export function FurtherReading({
  image,
  title,
}: {
  image: string
  title: string
}) {
  return (
    <div className="flex flex-col items-start justify-start ">
      <div className="font-lg mb-4 font-bold uppercase">Further Reading:</div>
      <div className="flex flex-row items-center">
        <div className="relative h-24 w-40">
          <Image
            src={image}
            alt={"imagee"}
            fill
            style={{ objectFit: "cover" }}
            className="contain"
          />
        </div>
        <div className="ml-4 flex text-xl font-bold">{title}</div>
      </div>
      <Separator className="my-6 border" />
    </div>
  )
}

export default FurtherReading
