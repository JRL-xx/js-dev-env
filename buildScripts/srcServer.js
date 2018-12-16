import express from 'express';
import config from '../webpack.config.dev';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpack_dev_middleware from "webpack-dev-middleware";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(webpack_dev_middleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use('/', function(req,res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
