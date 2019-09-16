const dev = require('./webpack.dev');
const prod = require('./webpack.prod');
const path = require('path');
const merge = require('webpack-merge');

module.exports = env => {
    // console.log(env); {production/development:true}
    let isDev = env.development;
    const base = {
        entry: path.resolve(__dirname, '../src/index.js'),
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../dist'),
        }
    }

    if (isDev) {
        return merge(base, dev);
    } else {
        return merge(base, prod);
    }
}