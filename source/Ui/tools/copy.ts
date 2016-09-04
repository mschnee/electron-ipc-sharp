import { ncp } from 'ncp';
import * as Promise from 'bluebird';

export default async function copy() {
    const pcp = Promise.promisify(ncp);
    pcp('source/index.html', 'output/index.html');
}