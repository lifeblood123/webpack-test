const path = require('path');
console.log(__dirname);//d:/webpack-test  总工程的路径

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')//__dirname 是总工程路径
  }
};