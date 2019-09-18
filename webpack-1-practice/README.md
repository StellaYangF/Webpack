# Webpack config
## css
Loaders needed: 
  1. style-loader
  2. css-loader
  3. optional： 
    postcss-loader
    sass-loader

## scss
Loaders needed: 
  1. style-loader
  2. css-loader
  3. sass-loader
     node-sass

## stylus
Loaders needed: 
  1. style-loader
  2. css-loader
  3. stylus-loader
  4. stylus

#### Abstract style
  1. Module needed: mini-css-extract-plugin, used when in development mode.
  2. const MiniCssExtractPlugin = require("mini-css-extract-plugin");
  ```
  module: [

      ]/\.test$/： use: [ isDev ? "style-loader" : MiniCssExtractPlugin.loader ]
  plugins: [
      !isDev && new MiniCssExtractPlugin({
        filename: 'css/main.css',
      })
  ].filter(Boolean)

  ```
   
#### DLL: Dynamic Link Library动态链接库

### Note:
  Default order for loader operation: 
    1. bottom => top
    2. right => left
