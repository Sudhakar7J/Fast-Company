"use client"

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share"

export function SocialMediaShare() {
  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <FacebookShareButton
          url={"https://github.com/next-shaasdasda"}
          quote={
            "next-share is a social share buttons for your next React apps."
          }
          hashtag={"#nextshare"}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
      <div className="mb-4">
        <TwitterShareButton
          url={"https://github.com/next-sharasdase"}
          title={
            "next-share is a social share buttons for your next React apps."
          }
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
      <div>
        <LinkedinShareButton url={"https://github.com/next-shasdasdare"}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  )
}

export default SocialMediaShare
