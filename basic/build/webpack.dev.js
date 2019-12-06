const path = require("path");
module.exports = {
  mode: "development",
  output: {
    filename: "dev.bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    port: 9000,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    }
  }
};
