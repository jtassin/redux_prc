var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require("path");
module.exports = {
    entry: "./src/main.js",
    module: {
        loaders: [
            {test: /\.css$/, loaders: ['style', 'css']},
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {test: /\.(png|woff|woff2|eot|ttf|svg|swf|jpg|jpeg|gif)$/, loader: 'url-loader?limit=100000'},
        ]
    },
    output: {
        path: 'dist',
        filename: 'index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: 'src/index.html',
            title: "React PRC Starter kit"
        }
    )],
};