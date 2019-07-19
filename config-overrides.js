const path = require('path')

const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),

  addWebpackAlias({
    cookbook: path.resolve(__dirname, './src/pages/home/cookbook'),
    assets: path.resolve(__dirname, './src/assets'),
    components: path.resolve(__dirname, './src/components'),
    utils: path.resolve(__dirname, './src/utils')
  })
)