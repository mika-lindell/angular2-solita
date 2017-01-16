// DEV ENV SETTINGS FOR WEBPACK

var webpackMerge = require('webpack-merge');                    
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); // Open browser window after webpack is ready
var commonConfig = require('./webpack.common.js');              // Common config for all environments
var helpers = require('./helpers');                             

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: helpers.devServer,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new OpenBrowserPlugin({ url: helpers.devServer })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
