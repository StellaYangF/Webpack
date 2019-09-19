import "./base.css";
import imgUrl from "./logo.png";

let img = document.createElement('img'),
    div = document.querySelector("#root");
img.src = imgUrl;
div.appendChild(img);

// console.log('hello');

import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(<div>hello</div>, document.getElementById('#root'));