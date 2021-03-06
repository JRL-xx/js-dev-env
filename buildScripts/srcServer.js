import express from 'express';
import webpackConfig from '../webpack.config.dev';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpack_dev_middleware from "webpack-dev-middleware";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(webpackConfig);

app.use(webpack_dev_middleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com"},
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
