const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack/dev.config');

const compiler = webpack(webpackConfig);

const WEBPACK_PORT = 8080;

const devServerOptions = {
  quiet: true,
  noInfo: true,
//  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true },
  historyApiFallback: true
};

const app = express();

app.use(webpackDevMiddleware(compiler, devServerOptions));
app.use(webpackHotMiddleware(compiler));
app.get('*', express.static(path.resolve(__dirname, '../public')));

app.listen(WEBPACK_PORT, (err) => {
    if(err)
        return console.error(err);

    console.info(`webpack dev server: http://localhost:${WEBPACK_PORT}`);
})