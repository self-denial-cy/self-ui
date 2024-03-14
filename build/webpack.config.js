const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const base = require('./webpack.base');
const { resolve } = require('./utils');

process.env.NODE_ENV = 'production';

/** @type {import('webpack').Configuration} */
module.exports = merge(base, {
  devtool: 'source-map',
  entry: resolve('./build-entry.js'),
  output: {
    path: resolve('../lib'),
    filename: 'selfui.js',
    library: 'selfui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [new CleanWebpackPlugin()]
});
