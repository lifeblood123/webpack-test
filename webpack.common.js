const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        
        main: './src/index.js',
     vendor: [
       'lodash'
     ],

        // another: './src/another-module.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/my-index.ejs',
            inject: 'body'

        }),
        new ExtractTextPlugin("styles.css"),
    ],
    optimization: {
      splitChunks: {
          cacheGroups: {
              commons: {
                  name: "vender",
                  chunks: "initial",
                  minChunks: 1
              },
              commons: {
                name: "manifest",
                chunks: "initial",
                minChunks: 1
            }
          }
      }
  },//去掉重复引用  代替webpack.optimize.CommonsChunkPlugin
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
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