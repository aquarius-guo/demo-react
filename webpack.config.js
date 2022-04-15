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
    devServer: {
        historyApiFallback: true,
        proxy: {
            "/api": {
                target: "https://github.com",
                pathRewrite: { "^/api": "" },
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
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
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: 'img/[name].[hash:6][ext]',
                            esModule: false,
                            limit: 10 * 1024
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".tsx", ".ts"],
        alias: {
            "@": path.resolve(__dirname, "src")
        }
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