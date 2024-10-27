import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";

const configs = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve('./dist'),
        clean: true,
        publicPath: './',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./public/index.html'),
            favicon: path.resolve('./public/favicon.ico'),
        }),
    ],
};

export default configs;