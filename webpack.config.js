var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var path = require("path");
module.exports = {
    entry: "./src/main.js",
    module: {
        loaders: [
            {test: /\.css$/, loaders: ['style', 'css']},
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},
            {
                test: /.jsx?$/,
                loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0'],
                exclude: /node_modules/,
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
    ), new webpack.HotModuleReplacementPlugin()],
};