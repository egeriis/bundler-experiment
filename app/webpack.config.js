const path = require('path');
const optimized = process.env.OPTIMIZED !== '0';

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: optimized ? 'bundle.optimized.js' : 'bundle.unoptimized.js'
  },
  mode: 'production',
  resolve: {
    mainFields: optimized ? ['module'] : ['main']
  }
};
