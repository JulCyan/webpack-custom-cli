const merge = require('webpack-merge')
const config = require('./webpack.config')
// const TerserJSPlugin = require('terser-webpack-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const {
  DefinePlugin
} = require('webpack')
const {
  BannerPlugin
} = require('webpack')
module.exports = merge(config, {
  mode: 'production',
  plugins: [
    new BannerPlugin('Now you using the webpack\'s configs is cyan\'s'),
    // 环境变量
    new DefinePlugin({
      ENV: {
        API_URL: '"yyyyyy"'
      }
    }),
  ],
  devtool: 'none',
  // optimization: {
  //   // css js 压缩
  //   minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  // }
})