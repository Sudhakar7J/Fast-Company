import { Circle } from "lucide-react"

export const SideNavConfig = {
  name: "Side nav config",
  sections: [
    {
      name: "auth",
      items: [
        {
          name: "Login",
          isBold: true,
          hasSeparator: true,
          icon: true,
        },
      ],
    },
    {
      name: "suits",
      items: [
        {
          name: "Premium",
          icon: Circle,
          color: "#777EB4",
        },
        {
          name: "Co.Design",
        },
        {
          name: "Tech",
        },
        {
          name: "Work Life",
        },
        {
          name: "News",
        },
        {
          name: "Impact",
        },
        {
          name: "Podcasts",
        },
        {
          name: "Video",
        },
        {
          name: "Innovation Festival 360",
          hasSeparator: true,
        },
      ],
    },
    {
      name: "Help ",
      items: [
        {
          name: "Help Center",
          hasSeparator: true,
        },
      ],
    },
    {
      name: "Fastco",
      items: [
        {
          name: "Fastco Works",
          hasSeparator: true,
        },
      ],
    },
    {
      name: "Collections",
      items: [
        {
          name: "Collections",
          hasSeparator: true,
        },
      ],
    },
    {
      name: "Newsletter",
      items: [
        {
          name: "Newsletter",
          hasSeparator: true,
        },
      ],
    },
    {
      name: "COURSES AND LEARNING",
      items: [
        {
          name: "COURSES AND LEARNING",
          hasSeparator: true,
        },
      ],
    },
    {
      name: "Ad",
      items: [
        {
          name: "Advertise",
          hasSeparator: true,
        },
      ],
    },
  ],
}
