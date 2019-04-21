const path = require('path');
console.log(__dirname);//d:/webpack-test  总工程的路径

module.exports = {
  // entry: './src/index.js',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },

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