import clean from './clean';
import copy from './copy';
import run from './run';
import tsc from './tsc';

async function build() {
    await run(clean);
    await run(copy);
    await run(tsc);
}

export default build;