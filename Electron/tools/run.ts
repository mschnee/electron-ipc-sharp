/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function format(time: Date) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

function run(fn: any, options?: any) {
  const task = typeof fn.default === 'undefined' ? fn : fn.default;
  const start = new Date();
  console.log(
    `[${format(start)}] Starting '${task.name}${options ? `(${options})` : ''}'...`
  );
  return task(options).then(() => {
    const end = new Date();
    const time = end.getTime() - start.getTime();
    console.log(
      `[${format(end)}] Finished '${task.name}${options ? `(${options})` : ''}' after ${time} ms`
    );
  });
}

if ((process as any)['mainModule']['children'].length === 0 && process.argv.length > 2) {
  delete require.cache[__filename]; // eslint-disable-line no-underscore-dangle
  const module: any = require(`./${process.argv[2]}`).default;
  run(module).catch((err: Error) => console.error(err.stack));
}

export default run;