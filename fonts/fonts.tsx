import { Playfair_Display, Ysabeau } from "next/font/google"

const playfairDisplay = Playfair_Display({ subsets: ["latin"] })
const ysabeaufont = Ysabeau({
  weight: "900",
  subsets: ["latin"],
})

export { playfairDisplay, ysabeaufont }
