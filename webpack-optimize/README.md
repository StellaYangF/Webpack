# Webpack Optimization
## Terms术语解释
  1. CDN Content Delivery Network内容分发网络   Cache Server
  2. DLL Dynamic Link Library动态链接库

## Scope Hoisting
  ```
  d.js
    const a = 1,
      b = 2,
      c = 3,
      d = a + b + c;
    export default d;
  output: 
    console.log(6);
  ```

### The same css for one selector, will omit one:
  ```
  .css
    body { background:#f8b; }
    .class1 { background: #f8b; }
  output file: 
    .class1,body{background:#f8b}
  ```

## DLLPlugin
