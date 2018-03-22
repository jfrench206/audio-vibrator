const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PUBLIC_PATH_PREFIX = './'

module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['docs']),
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' }
    ]),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'src/index.html',
      pathPrefix: PUBLIC_PATH_PREFIX
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: PUBLIC_PATH_PREFIX
  }
}