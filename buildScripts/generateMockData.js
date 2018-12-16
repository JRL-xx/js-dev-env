/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

jsf.extend('faker', () => require('faker'));
const generated = jsf.generate(schema);
const json = JSON.stringify(generated);

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err.message));
  }
  console.log(chalk.green("Mock data generated."));
});
