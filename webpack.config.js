const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  output: {
    library: 'SCM',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ],
  }
};