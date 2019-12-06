const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin,
      new HtmlWebpackPlugin({ title: "Production" }),
  ]
}