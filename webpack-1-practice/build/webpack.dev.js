const { resolve } = require("path");
module.exports = {
  mode: "development",
  devServer: {
    proxy: {
      "/api": {
        targt: "http://localhost:4000"
      }
    },
    port: 4000,
    compress: true,
    contentBase: resolve(__dirname, "../dist")
  }
};
