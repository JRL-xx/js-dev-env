import path from 'path';
const HtmlWebpackPlugin = require('html-webpack-plugin');

export default {
  mode: 'development',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    noInfo: false,
  },
  plugins: [new HtmlWebpackPlugin({template: 'src/index.html', inject: true })]
};
