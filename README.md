# Webpack Learning Notes

## 1. Configuration 
### 1.1 Loaders 
#### 1.1.1 Introduction
- `test`: RegExp 
- `use`: string, object, or array
- `include/exclude`
- `options`

#### 1.1.2 Classification
- Configure css
- Configure images, including: jpg, jpeg, png, gif etc
- Configure js

### 1.2 Plugins configuration

## 2. Optimization
### 2.1 Css and js and html compress
  - Compress css
  > npm install --save-dev optimize-css-assets-webpack-plugin
  - Compress js
  > terser-webpack-plugin
  - Compress html
  > npm install --save-dev html-webpack-plugin
```js
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin(),
    ]
  },
}

new htmlWebpackPlugin({
  template: resolve(__dirname, "../public/vue.html"),
  filename: "vueindex.html",
  chunks: ["vue"],
  minify: !isDev && {
    removeAttributeQuotes: true,
    collapseWhitespace: true
  },
}),
 ```

 ### 2.2 Delete unused css
 > npm install --save-dev purgecss-webpack-plugin
 > npm install --save-dev mini-css-extract-plugin
 ```js
const PurgecssPlugin =  require('purgecss-webpack-plugin');
const glob = require('glob');
// mini-css-extract-plugin is needed.
{
  plugins: [
    !isDev && new PurgecssPlugin({
        paths: glob.sync(`${path.join(__dirname, "src")}/**/*`, { nodir: true }) 
        // Not Matching directories, only files.
        // paths: Array
    }),
    !isDev && new MiniCssExtractPlugin({
      filename: "css/[name].[contentHash].css"
    }),
  ].filter(Boolean)
}
 ```