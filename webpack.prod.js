const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new UglifyJSPlugin({
            sourceMap: true
        })
    ],
    mode: "production",
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },

});