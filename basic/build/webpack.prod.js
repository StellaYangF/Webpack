const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    "index": path.resolve(__dirname, '../src/index.js'),
    "login": path.resolve(__dirname, "../src/login.js"),
    "register": path.resolve(__dirname, "../src/register.js"),
  },
  output: {
    filename: "[name].min.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Home",
      filename: "index.html",
      template: path.resolve(__dirname, "../public/index.html"),
      inject: 'head',
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
      chunksSortMode: "manual",
      chunks: ['login', 'register' ,'index'],
    }),
    new HtmlWebpackPlugin({
      title: "Login",
      filename: "login.html",
      template: path.resolve(__dirname, "../public/login.html"),
      excludeChunks:['register'],
    }),
    new HtmlWebpackPlugin({
      title: "Register",
      filename: "register.html",
      template: path.resolve(__dirname, "../public/register.html"),
      excludeChunks:['login']
    })
  ]
};
