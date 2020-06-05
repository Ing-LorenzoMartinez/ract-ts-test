const path = require('path');
const minicssextract = require('mini-css-extract-plugin');
const htmlwebpack = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [ '.ts','.tsx','.js','.jsx','.json']
    },
    module:{
        rules :[
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss?$/,
                use:[
                    minicssextract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new htmlwebpack({
            template:'src/index.html'
        }),
        new minicssextract('style.css')
    ],
    devtool: 'source-map'
};