const Default = {
  background: "#0f1117",
  foreground: "#E0E0E0"
}

const Sections = [
  {
    name: "Home",
    description: "Is the home page of the website",
    url: "/",
    colors: ["#A9E775", "#5A45FF", "#5A45FF"],
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
  default: Default
}
