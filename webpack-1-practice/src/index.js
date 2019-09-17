const welcome = require('./a-module.js');
require('./css.css');

const img = document.createElement('img');
const div = document.querySelector('#root');
img.src = require("./logo.jpg");
div.appendChild(img);

console.log(welcome);