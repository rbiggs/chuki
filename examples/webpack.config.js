const path = require('path')
const webpack = require('webpack')
const libraryName = 'chuki'
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './dev/app'),
  output: {
    path: path.join(__dirname, './js'),
    filename: 'app.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  }, 
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: false,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi]
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  }
};
