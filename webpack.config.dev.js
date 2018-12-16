const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    noInfo: false,
  },
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src'),
    publicPath: '/'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
