const path = require('path')

module.exports = {
  // eslint-disable-next-line no-unused-vars
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    config.resolve.alias['@components'] = path.join(__dirname, './components')
    config.resolve.alias['@utils'] = path.join(__dirname, './utils')

    return config
  }
}
