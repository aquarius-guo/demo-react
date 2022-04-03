const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "js/main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:[
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", 
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        }
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.jsx?$/,
                use: ["babel-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".tsx", ".ts"]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "假如我是 title",
            template: "./public/index.html"
        }),
        new DefinePlugin({
            BASE_URL: "'/'"
        })
    ],
    mode: "development",
    devtool: "cheap-module-source-map"
}