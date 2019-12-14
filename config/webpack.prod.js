const config = require('./webpack.base')
const { BannerPlugin } = require('webpack')
module.exports = {
    ...config,
    mode: 'production',
    plugins: [
        new BannerPlugin('Now you using the webpack\'s configs is cyan\'s')
    ],
    devtool: 'none',
}