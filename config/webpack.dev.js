const config = require('./webpack.config')
module.exports = {
    ...config,
    mode: 'development',
    // module: {
    //     rules: [
    //         ...config.module.rules,

    //         {
    //             test: /\.(htm|html)$/i,
    //             loader: 'html-withimg-loader'
    //         }
    //     ],
    // },
    // 源码映射
    devtool: 'cheap-module-source-map',
}