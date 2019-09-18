const webpack = require('webpack');
module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ]
}