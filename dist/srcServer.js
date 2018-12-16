"use strict";

var _express = _interopRequireDefault(require("express"));

var _webpackConfig = _interopRequireDefault(require("../webpack.config.dev"));

var _path = _interopRequireDefault(require("path"));

var _open = _interopRequireDefault(require("open"));

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* eslint-disable no-console */


var port = 3000;
var app = (0, _express.default)();
var compiler = (0, _webpack.default)(_webpackConfig.default);
app.use((0, _webpackDevMiddleware.default)(compiler, {
  noInfo: true,
  publicPath: _webpackConfig.default.output.publicPath
}));
app.get('/', function (req, res) {
  res.sendFile(_path.default.join(__dirname, '../src/index.html'));
});
app.get('/users', function (req, res) {
  res.json([{
    "id": 1,
    "firstname": "Bob",
    "lastname": "Smith",
    "email": "bob@gmail.com"
  }, {
    "id": 2,
    "firstname": "Tammy",
    "lastname": "Norton",
    "email": "tnorton@yahoo.com"
  }, {
    "id": 3,
    "firstname": "Tina",
    "lastname": "Lee",
    "email": "lee.tina@hotmail.com"
  }]);
});
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    (0, _open.default)('http://localhost:' + port);
  }
});
//# sourceMappingURL=srcServer.js.map