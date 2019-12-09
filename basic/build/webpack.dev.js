const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  output: {
    filename: "[name].[hash].bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    port: 9000,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    }
  },
  plugins: [
    new CopyPlugin([{
      from: path.resolve(__dirname, '../src/a.json'),
      to: path.resolve(__dirname, '../dist/a.json'),
    }])
  ]
};
