const path = require('path');

module.exports = {
    //run babel on every file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                }
            }
            ,
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    }
};