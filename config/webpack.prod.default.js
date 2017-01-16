// WEBPACK PROD CONFIG

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');                    
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 
var commonConfig = require('./webpack.common.js');  // Common config for all environments
var helpers = require('./helpers');                             

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: helpers.root('public'), // This needs to be the url or path to your assets or cdn
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  htmlLoader: {
    minimize: false // workaround for ng2
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin('[name].[hash].css'), // This will add changing hash to filenames 
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
});
