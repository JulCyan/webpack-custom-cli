const merge = require('webpack-merge')
const config = require('./webpack.config')
const { DefinePlugin } = require('webpack')
module.exports = merge(config, {
  mode: 'development',
  module: {
    rules: [{
      test: /\.(htm|html)$/,
      loader: 'html-withimg-loader'
    }],
  },
  plugins: [
    // 环境变量
    new DefinePlugin({
      ENV: {
        API_URL: '"xxxxxx"'
      }
    })
  ],
  // 源码映射
  devtool: 'cheap-module-source-map',
})