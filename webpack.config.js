const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/dist/',
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass?outputStyle=expanded&sourceMap!postcss-loader'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  }
}