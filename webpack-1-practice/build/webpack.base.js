const dev = require("./webpack.dev.js");
const prod = require("./webpack.prod.js");
const { resolve } = require("path");
const merge = require("webpack-merge");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = env => {
  const isDev = env.development;
  let base = {
    entry: {
     "vue": resolve(__dirname, "../src/vue.ts"),
     "react": resolve(__dirname, "../src/react.ts")
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: "vue-loader"
        },
        {
          test: /\.tsx?$/,
          use: "babel-loader"
        },
        {
          test: /\.js$/,
          use: "babel-loader"
        },
        {
          test: /\.css$/,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 2
              }
            },
            "postcss-loader",
            "sass-loader"
          ]
        },

        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(woff|ttf|eot)$/,
          use: "file-loader"
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: {
            loader: "url-loader",
            options: {
              name: "image/[contentHash].[ext]",
              limit: 1024
            }
          }
        }
      ]
    },
    output: {
      filename: "[name]bundle.js",
      path: resolve(__dirname, "../dist")
    },
    plugins: [
      !isDev && new MiniCssExtractPlugin({
        filename: 'css/main.css',
      }),
      new VueLoaderPlugin(),
      new htmlWebpackPlugin({
        template: resolve(__dirname, "../public/vue.html"),
        filename: "vueindex.html",
        chunks: ["vue"],
        minify: !isDev && {
          removeAttributeQuotes: true,
          collapseWhitespace: true
        },
      }),
      new htmlWebpackPlugin({
        template: resolve(__dirname, "../public/react.html"),
        filename: "reactindex.html",
        chunks: ["react"],
        minify: !isDev && {
          removeAttributeQuotes: true,
          collapseWhitespace: true
        },
      })
    ].filter(Boolean)
  };
  return isDev ? merge(base, dev) : merge(base, prod);
};
