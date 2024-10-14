const path = require("path");

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.[contenthash].js"
    },
    mode: "development",
    plugins: [ new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 3. injects styles into DOM
                    "css-loader", // 2. turns css into commonjs
                    "sass-loader", // 1. turns sass into css
                ]
            }
        ]
    }
};