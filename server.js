const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

app.use('/assets', express.static('assets'))

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base - except explicitly define publicPath so dev environment works right
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/'
}))

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n')
})