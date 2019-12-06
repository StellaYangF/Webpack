const path = require('path');
module.exports = (e) => {
  console.log(e);
  return {
    entry: path.resolve(__dirname, './src/index.js'),
  }
}