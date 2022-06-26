/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  future: {
    webpack5: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
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

  reactStrictMode: true,
}

module.exports = nextConfig



