const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: 'index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "../index.html",
        template: path.resolve(__dirname, "./src/main.html")
    })]
};