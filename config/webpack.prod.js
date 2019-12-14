const merge = require('webpack-merge')
const config = require('./webpack.config')
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
    })
  ],
  devtool: 'none',
})