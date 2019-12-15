const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const base = {
  path: path.join(__dirname, '..')
}
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const lastStyleLoader = MiniCssExtractPlugin.loader
const lastStyleLoader = 'style-loader'
module.exports = {
  // entry 相对位置是 config 运行时目录
  entry: './src/main.js',
  // output 相对位置是 config 所处目录
  output: {
    // 出口文件夹 absolute
    path: path.join(base.path, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 模板来源 
      template: path.join(base.path, './public/index.html')
    }),
    // 打包自动删除构建结果
    new CleanWebpackPlugin({
      // 排除文件 详见 https://github.com/johnagan/clean-webpack-plugin
      cleanOnceBeforeBuildPatterns: ['**/*', '!file-name*'],
    }),
    // 复制资源到构建目录
    new CopyWebpackPlugin([{
      from: 'public/**',
      // 去除输出路径中的 public
      transformPath(targetPath) {
        return targetPath.replace('public', '')
      },
      // 忽略
      ignore: ['*.html']
    }]),
    // 抽离 css 代码
    // new MiniCssExtractPlugin({
    //   filename: '[name].css'
    // })
  ],
  module: {
    // loaders
    rules: [
      // css
      {
        test: /.css$/,
        use: [
          lastStyleLoader,
          'css-loader',
          'postcss-loader'
        ],
      },
      // scss
      {
        test: /\.s(a|c)ss$/,
        use: [lastStyleLoader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      // less
      {
        test: /\.less$/,
        use: [lastStyleLoader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      // images
      {
        test: /\.(jpg|jpeg|png|bmp|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 低于限制的打包为 base64 编码, 超出的则经过loader处理后输出
            limit: 30 * 1024,
            // 输出文件夹路径
            outputPath: 'images',
            // 打包的文件名格式
            name: '[name]-[hash:6].[ext]'
          }
        }
      },
      // icon font
      {
        test: /\.(woff|woff2|eot|svg|ttf)$/,
        use: 'url-loader'
      },
      // js
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        // 排除目录
        exclude: /node_modules/,
      },
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     // 公共包抽取
  //     chunks: 'all'
  //   }
  // },
}