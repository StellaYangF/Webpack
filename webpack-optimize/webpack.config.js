const DEVELOPMENT = "development";
const PRODUCTION = 'production';
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = mode => {
  const isDev = mode === DEVELOPMENT;
  return {
    
    mode: isDev ? DEVELOPMENT : PRODUCTION,

    resolve: {
      extensions: [ ".css", ".js", ".jsx", "ts", "tsx", "vue" ]
    },

    optimization: {
      minimizer: [
        !isDev && new OptimizeCssAssetsWebpackPlugin(),
        !isDev && new TerserWebpackPlugin(),
      ].filter(Boolean)
    },

    entry: "./src/index.js",

    output: {
      filename: "bundle.js",
      path: resolve(__dirname, "./dist")
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            },
            "css-loader",
            "postcss-loader",
          ]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "index.html",
        minify: !isDev && {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
        }
      }),

       !isDev && new MiniCssExtractPlugin(),

       new CleanWebpackPlugin(),

    ].filter(Boolean)

  }
}