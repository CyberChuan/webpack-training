import commonConfig from './common.js';
import {merge} from 'webpack-merge';

export default merge(commonConfig, {
  mode: 'production',
})