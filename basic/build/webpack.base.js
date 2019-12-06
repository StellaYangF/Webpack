const path = require("path");
const merge = require("webpack-merge");
const devConfig = require("./webpack.dev.js");
const prodConfig = require("./webpack.prod.js");

module.exports = env => {
  const isDev = env.development || false;
  let config = {
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "../dist")
    },
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader' },
      ]
    },
    
  };
  return isDev ? merge(config, devConfig) : merge(config, prodConfig);
};
