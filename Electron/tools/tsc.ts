import { exec } from 'child_process';
import * as Promise from 'bluebird';
import * as path from 'path';

async function tsc() {
    return new Promise((resolve, reject) => {
        exec( path.resolve('./node_modules/.bin/tsc'), (error: Error, stdout: string, stderr: string) => {
            if (error || stderr) {
                console.log(stdout, stderr);
                reject(new Error(stderr));
            } else {
                resolve(stdout);
            }
        })
    });
}

export default tsc;