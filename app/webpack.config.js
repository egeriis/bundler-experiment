const path = require('path');

module.exports = {
  entry: {
    index: './index.js',
    indexEs: './indexEs.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[name].js'
  },
  mode: 'production'
};
