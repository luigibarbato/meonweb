/** @type {import('next').NextConfig} */

const { withSentryConfig } = require('@sentry/nextjs')

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

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(nextConfig, {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
})




