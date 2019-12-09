const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  output: {
    filename: "[name].min.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
};
