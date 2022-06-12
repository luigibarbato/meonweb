/** @type {import('next').NextConfig} */


const withSass = require("@zeit/next-sass");

module.exports = withSass();

const nextConfig = {
  future: {
    webpack5: true
  },
  webpack: (config) => {
    // config.experiments = { topLevelAwait: true };
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    config.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      }
    )
    return config;
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  reactStrictMode: true,
}

module.exports = nextConfig



