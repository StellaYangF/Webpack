# Webpack
## NPM & CLI 相关包以及命令
  1. npm init -y
  2. npm install webpack webpack-cli --save -dev
  3. npx webpack  -- zero-config ---node-mode
  4. package.json
    4.1 buil : webpack --mode production
  5. npm run build
  6. add webpack.config.js
  7. add build/webpack.base.js
  8. add build/webpack.dev.js
  9. add build/webpack.prod.js
  10. dlt webpack.config.js
  11. npm install webpack-merge --save-dev
  12. npm install webpack-dev-server --save-dev
  13. npm install html-webpack-plugin  --save-dev
   
## Reference
   webpack.config.js
   webpack.file.js
   * 默认导出的是配置对象
   * 没有该文件时，则采用默认配置
  
  webpack-dev-server是在内存中打包，不会实际出现在目录中