import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const configs = {
  entry: {
    main: './src/main.tsx'
  },
  output: {
    filename: 'js/[name]_[contenthash:6].bundle.js',
    path: path.resolve('./dist'),
    clean: true,
    publicPath: './',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: './public',
        globOptions: {
          ignore: ['**/index.html']
        }
      }],
      options: {
        concurrency: 100,
      },
    })
  ],
};

export default configs;