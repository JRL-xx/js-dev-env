"use strict";

var _jsonSchemaFaker = _interopRequireDefault(require("json-schema-faker"));

var _mockDataSchema = require("./mockDataSchema");

var _fs = _interopRequireDefault(require("fs"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* eslint-disable no-console */


_jsonSchemaFaker.default.extend('faker', function () {
  return require('faker');
});

var generated = _jsonSchemaFaker.default.generate(_mockDataSchema.schema);

var json = JSON.stringify(generated);

_fs.default.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(_chalk.default.red(err.message));
  }

  console.log(_chalk.default.green("Mock data generated."));
});
//# sourceMappingURL=generateMockData.js.map