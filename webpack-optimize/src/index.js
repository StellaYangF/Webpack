// let a:string = 'hello';
// console.log(a);

import './style.css';
import imgUrl from  "./logo.jpg";
import { minus } from './calc';
import $ from "jquery";
import React from 'react';
import { async } from 'q';
// import ReactDOM from 'react-dom';
// ReactDOM.render(<div>hello</div>,document.getElementById('root'));

let d = undefined;
let button = document.createElement('button'),
    root = document.getElementById('root'),
    img = document.createElement('img');
img.src = imgUrl;
button.innerHTML = 'Click';
button.onclick = async () => {
 let data = await import('./d');
  console.log(data);
  alert("I'm lazy-loading.")
};
root.appendChild(button);
root.appendChild(img);

// console.log($);
console.log(minus(1,1));
