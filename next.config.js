/** @type {import('next').NextConfig} */


const withSass = require("@zeit/next-sass");

module.exports = withSass();

const nextConfig = {
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    config.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      }
    )
    return config;
  },
  reactStrictMode: true,
}

module.exports = nextConfig



