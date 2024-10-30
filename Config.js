const Default = {
  background: "#0f1117",
  foreground: "#EDF0F2"
}

const Seo = {
  websiteUrl: "https://luigibarbato.digital",
  defaultTitleTemplate: "Luigi Barbato - Software Engineer | ",
  defaultDescriptionTemplate: "Luigi Barbato - Software Engineer | "
}

const Sections = [
  {
    name: "Home",
    description: "Is the home page of the website",
    url: "/",
    colors: ["#83FBFB", "#EA1220", "#0f1117"],
    radialBackground: true,
  },
  {
    name: "Work",
    description: "Is the page where you can see my work",
    url: "/Work",
    colors: ["#1C74E7", "#2FC3C1", "#2FC3C1"],
    radialBackground: true,
  },
  {
    name: "Loving",
    description: "Is the page where you can see my interests",
    url: "/Loving",
    colors: ["#e732bd", "#1b00e8", "#1b00e8"],
    radialBackground: true,
  },
];


export const Config = {
  sections: Sections,
  default: Default,
  seo: Seo
}
