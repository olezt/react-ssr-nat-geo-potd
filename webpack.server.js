const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    //inform webpack we are building a bundle for nodeJS, not for the browser
    target: 'node',
    //root file of our server application
    entry: './src/index.js',
    // where to generate the output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    externals: [webpackNodeExternals()]
};


module.exports = merge(baseConfig, config);