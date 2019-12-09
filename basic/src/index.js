const str = require('./a.js');
// injected in html-webpack-plugin with externals: { jquery: "$" } to avoid import
import $ from 'jquery';
console.log('jquery', $);
console.log('window.jquery', window.$);
console.log(str);