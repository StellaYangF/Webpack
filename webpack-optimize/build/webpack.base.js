const dev = require("./webpack.dev.js");
const prod = require("./webpack.prod.js");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve, join } = require("path");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const { sync } = require("glob");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
// const AddAssetHtmlCdnPlugin = require("add-asset-html-cdn-webpack-plugin");

module.exports = mode => {
  const isDev = mode === "development";
  let base = {
    entry: {
      ts: resolve(__dirname, "../src/index.js")
    },
    output: {
      filename: "[name].js",
      path: resolve(__dirname, "../dist")
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader"
        },
        {
          test: /\.tsx?$/,
          use: "babel-loader"
        },
        {
          test: /\.css$/,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader"
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                name: "image/[contentHash].[ext]",
                limit: 1024
              }
            },
            // "file-loader",
            // {
            //   loader: "image-webpack-loader",
            //   options: {
            //     mozjpeg: {
            //       progressive: true,
            //       quality: 65
            //     },
            //     optipng: {
            //       enabled: false
            //     },
            //     pngquant: {
            //       quality: [0.9, 0.95],
            //       speed: 4
            //     },
            //     gifsicle: {
            //       interlaced: false
            //     },
            //     webp: {
            //       quality: 75
            //     }
            //   }
            // }
          ]
        }
      ]
    },
    plugins: [
      // new AddAssetHtmlCdnPlugin(true,{
      //   'jquery':'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js'
      // }),
      isDev || new CleanWebpackPlugin(),
      isDev ||
        new MiniCssExtractPlugin({
          filename: "css/[name].css"
        }),
      // isDev ||  new PurgecssPlugin({
      //   paths: sync(`${join(__dirname, "src")}/**/*`, { nodir: true })
      // }),
      new HtmlWebpackPlugin({
        template: resolve(__dirname, "../public/index.html"),
        filename: "index.html",
        minify: !isDev && {
          removeAttributeQuotes: true,
          collapseWhitespace: true
        }
      }),
      isDev || new CleanWebpackPlugin()
    ].filter(Boolean),
    resolve: {
      extensions: [".js", "css", "ts", "tsx", "jsx", "vue"]
    },
    optimization: {
      minimizer: [
        new OptimizeCssAssetsWebpackPlugin(),
        new TerserWebpackPlugin()
      ]
    },
    externals: {
      "jquery": "$"
    }
  };
  return isDev ? merge(base, dev) : merge(base, prod);
};
