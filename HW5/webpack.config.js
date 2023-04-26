const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.default = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        main: './src/index.js',
        weather: './src/weather.js'
    },
    output: {
        clean: true,
        filename: '[name].bundle.js'
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
                loader: 'json-loader',
                type: 'javascript/auto'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "index.html"}),
    ]
};