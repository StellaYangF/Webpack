const path = require("path");
const merge = require("webpack-merge");
const devConfig = require("./webpack.dev.js");
const prodConfig = require("./webpack.prod.js");
const AddAssetHtmlCdnWebpackPlugin = require('add-asset-html-cdn-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  const isDev = env.development || false;
  let config = {
    entry: {
      "index": path.resolve(__dirname, '../src/index.js'),
      "login": path.resolve(__dirname, "../src/login.js"),
      "register": path.resolve(__dirname, "../src/register.js"),
    },
    output: {
      filename: "[name].min.js",
      path: path.resolve(__dirname, "../dist")
    },
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader' },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Home",
        filename: "index.html",
        template: path.resolve(__dirname, "../public/index.html"),
        inject: 'body',
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
      }),
      new AddAssetHtmlCdnWebpackPlugin(true, {
        'jquery': 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js',
        // "theme": 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css',
        index: {
          script: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
          style: 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css',
        }
      })
    ],
    externals: {
      'jquery': '$',
    }
    
  };
  return isDev ? merge(config, devConfig) : merge(config, prodConfig);
};
