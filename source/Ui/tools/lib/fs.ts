/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as Promise from 'bluebird';

const writeFile = (file: string, contents: any) => new Promise((resolve, reject) => {
  fs.writeFile(file, contents, 'utf8', err => err ? reject(err) : resolve());
});

const makeDir = (name: string) => new Promise((resolve, reject) => {
  mkdirp(name, err => err ? reject(err) : resolve());
});

export default { writeFile, makeDir };