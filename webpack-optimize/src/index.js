// let a:string = 'hello';
// console.log(a);

import './style.css';
import imgUrl from  "./logo.jpg";
// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(<div>hello</div>,document.getElementById('root'));

let button = document.createElement('button'),
    root = document.getElementById('root'),
    img = document.createElement('img');
img.src = imgUrl;
button.innerHTML = 'Click';
button.onclick = () => alert('Hello');
root.appendChild(button);
root.appendChild(img);