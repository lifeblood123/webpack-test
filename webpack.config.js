const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackTemplate = require('html-webpack-template')
console.log(__dirname);//d:/webpack-test  总工程的路径

module.exports = {
  // entry: './src/index.js',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output',
      filename: 'index.html',
      inject: 'head',
      hash : true
    }),
    new HtmlWebpackPlugin({
      title: 'Output2',
      filename: 'index2.html',
      template: './src/my-index.ejs'
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