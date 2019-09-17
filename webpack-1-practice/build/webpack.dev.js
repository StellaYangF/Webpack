const { resolve } = require('path');
module.exports = {
  mode: 'development',
  devServer: {
    port: 3000,
    compress: true,
    contentBase: resolve(__dirname, '../dist'),
  }
}