const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

const webpackCommon = require('./webpack.common');

const PORT = '7017';

const webpackDevelopment = () => ({
  entry: 'src/index.jsx',
  mode: 'development',
  devtool: 'source-map',
  watchOptions: {
    ignored: '**/node_modules/**'
  },
  devServer: {
    port: PORT,
    host: 'localhost',
    historyApiFallback: true,
    static: {
      directory: './',
      watch: {
        ignored: '**/node_modules/**'
      }
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './public/', to: './' },
      ]
    }),
    new HotModuleReplacementPlugin()
  ]
});

module.exports = (options) => merge(webpackCommon(options), webpackDevelopment());
