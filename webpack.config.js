const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
console.log(__dirname);//d:/webpack-test  总工程的路径

module.exports = {
  // entry: './src/index.js',

  entry: {
    app: './src/index.js'
    // print: './src/print.js'
  },
  devtool: 'inline-source-map',//报错的时候找到目标文件，映射到原始文件
  devServer: {
         contentBase: './dist',
         hot : true
      },
  mode : "production",//设置开发模式，dist下的文件未压缩代码
  plugins: [
    new CleanWebpackPlugin(),
    // new UglifyJSPlugin({
    //   test: /\.js($|\?)/i
    // }),     //压缩代码
    new HtmlWebpackPlugin({
      title: 'Output',
      // filename: 'index.html',
      // hash: true,
      // template: './src/my-index.ejs',
      favicon: path.resolve('src/image/a.ico')
    }),
    new HtmlWebpackPlugin({
      title: 'Output2',
      filename: 'index2.html'
    })
  ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')//__dirname 是总工程路径
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};