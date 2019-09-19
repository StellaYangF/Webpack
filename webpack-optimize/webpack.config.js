const DEVELOPMENT = "development";
const PRODUCTION = 'production';
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PurgecssPlugin =  require('purgecss-webpack-plugin');
const glob = require('glob');
// console.log(glob.sync(`${resolve(__dirname, "src")}/**/*`, { nodir: true }));  
// => 数组

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
          test: /\.js$/,
          use: "babel-loader"
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 2
              }
            },
            "postcss-loader",
            "sass-loader"
          ]
        }, {
          test: /\.scss$/,
          use: [
            "style-loader", "css-loader", "sass-loader"
          ]
        }, {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                name: "img/[contentHash].[ext]",
                limit: 1024
              }
            }, 
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

       !isDev && new MiniCssExtractPlugin({
         filename: "css/[name].[contentHash].css"
       }),

       new CleanWebpackPlugin(),

    ].filter(Boolean)

  }
}