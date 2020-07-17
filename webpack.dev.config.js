const path = require("path"),
    { CleanWebpackPlugin } = require("clean-webpack-plugin"),
    HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: ''
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/env'
                            ],
                            plugins: [
                                'babel-plugin-transform-class-properties'
                            ]

                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*'
            ]

        }),
        new HTMLWebpackPlugin({
            title: "webpack fan art",
            meta: {
                author: "K.T Motshoana"
            },
            favicon: "./src/lofi_sun.png"
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        index: 'index.html',
        port: 9000
    }
}