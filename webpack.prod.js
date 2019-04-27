const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        // new UglifyJSPlugin({
        //     sourceMap: true
        // }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    mode: "development",
    output: {
        // filename: '[name].min.js',
        // chunkFilename: '[name].bundle.[chunkhash].js',
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },

});