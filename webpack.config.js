var webpack = require('webpack')
var path = require('path')
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'public/app.js'),
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']}
    ]
  }
}