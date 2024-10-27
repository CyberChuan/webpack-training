import {merge} from 'webpack-merge';
import commonConfig from './common.js'
import path from "path";

export default merge(commonConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: path.resolve('./dist'),
        port: 4000,
        open: true,
        liveReload: false,
        compress: true,
        headers: {
          'cache-control': 'no-store',
        },
        devMiddleware: {
            writeToDisk: true,
        }
    },
    optimization: {
        runtimeChunk: 'single',
    },
});
