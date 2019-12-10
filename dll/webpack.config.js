const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
resolvePath = filename => resolve(__dirname, filename);

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    contentBase: resolvePath("./dist")
  },
  entry: resolvePath("./src/index.js"),
  output: {
    filename: "index.bundle.js",
    path: resolvePath("dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath("./public/index.html"),
      name: "index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename:'css/css.css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  }
};
