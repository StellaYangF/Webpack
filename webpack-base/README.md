# webpack
## npms & clis相关包以及命令
  1. npm init -y
  2. npm install webpack webpack-cli --save -dev
  3. npx webpack  -- zero-config ---node-mode
  4. package.json
    4.1 buil : webpack --mode production
  5. npm run build
  6. + webpack.config.js
  7. + build/webpack.base.js
  8. + build/webpack.dev.js
  9. + build/webpack.prod.js
  10. - webpack.config.js
   
## Reference
   webpack.config.js
   webpack.file.js
   * 默认导出的是配置对象
   * 没有该文件时，则采用默认配置