const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge( common, {
  mode: "development",
  devtool: 'inline-source-map',
  watch: true,
  output: {
    filename: 'jsmxq-dev.js',
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
});