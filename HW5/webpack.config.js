const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

exports.default = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        main: './src/index.js',
        weather: './src/weather.js'
    },
    output: {
        clean: true,
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use:['file-loader']
            },
            {
                test: /\.json$/,
                // loader: 'json-loader',
                type: 'javascript/auto'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "index.html"}),
    ]
};