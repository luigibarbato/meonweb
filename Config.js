const Default = {
  background: "#0f1117",
  foreground: "#EDF0F2"
}

const Seo = {
  siteName: "Luigi Barbato - Software Engineer",
  siteDescription: "Experienced Software Engineer specializing in web development, creating innovative solutions and delivering high-quality software",
  siteUrl: "https://luigibarbato.digital",
  siteTitleTemplate: "Luigi Barbato - Software Engineer | %s",
  twitterUsername: "luigibarbato_",
  locale: "en_IE"
}

const Sections = [
  {
    name: "Home",
    description: "Welcome to the home page, your gateway to exploring the website.",
    url: "/",
    colors: ["#83FBFB", "#EA1220", "#0f1117"],
    radialBackground: true,
  },
  {
    name: "Work",
    description: "Discover my professional journey and the projects I've worked on.",
    url: "/Work",
    colors: ["#1C74E7", "#2FC3C1", "#2FC3C1"],
    radialBackground: true,
  },
  {
    name: "Loving",
    description: "Explore my personal interests and passions.",
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
