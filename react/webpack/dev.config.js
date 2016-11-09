const path = require('path');
const webpack = require('webpack');
const WEBPACK_PORT = 8080;
const ASSETS_PATH = path.resolve(__dirname, '../public');

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
        main: [
            //`webpack-hot-middleware/client?path=http://localhost:${WEBPACK_PORT}/__webpack_hmr`,
            'react-hot-loader/patch',
            'webpack-hot-middleware/client',
            './src/index.js'
        ]
  },
  output: {
    path: ASSETS_PATH,
    filename: '[name].js',
//    chunkFilename: '[name]-[chunkhash].js',
    publicPath: `/public/`,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ],
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'node_modules',
      'src',
    ],
    extensions: ['', '.json', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      _DEV_: JSON.stringify(true)
    }),
    // hot reload
    new webpack.HotModuleReplacementPlugin()  
  ],
};