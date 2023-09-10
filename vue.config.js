const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, './server/dist'),
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [],
    },
  },
}
