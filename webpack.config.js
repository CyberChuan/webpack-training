module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: __dirname + '/dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};