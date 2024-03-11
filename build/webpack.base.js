const webpack = require('webpack');
const { VueLoaderPlugin } = require('@vue/vue-loader-v15');
const pkg = require('../package.json');

/** @type {import('webpack').Configuration} */
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: '@vue/vue-loader-v15'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: [
                  'last 3 Chrome versions',
                  'last 3 Firefox versions',
                  'Safari >= 10',
                  'Explorer >= 11',
                  'Edge >= 12',
                  'iOS >= 10',
                  'Android >= 6'
                ]
              }
            ]
          ],
          plugins: ['@babel/plugin-transform-runtime']
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.VERSION': `'${pkg.version}'`
    })
  ]
};
