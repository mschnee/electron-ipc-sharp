import { RestClient } from '../RestClient/index';
let uniqueRequestId = 1;
let worker;
export class RestWorkerClient extends RestClient {
    constructor() {
        super(...arguments);
        this.promiseMap = new Map();
        this.handleResponse = (ev) => {
            const r = JSON.parse(ev.data);
            if (r.id && this.promiseMap.has(r.id)) {
                const handlers = this.promiseMap.get(r.id);
                this.promiseMap.delete(r.id);
                if (r.success) {
                    handlers.resolve(r.response);
                }
                else {
                    handlers.reject(r.response);
                }
            }
        };
    }
    construstor() {
        if (!worker) {
            worker = new Worker('RestClientWorker.js');
        }
        worker.addEventListener('response', this.handleResponse);
    }
    get(action) {
        return new Promise((_resolve, _reject) => {
            const id = ++uniqueRequestId;
            this.promiseMap.set(id, {
                resolve: _resolve,
                reject: _reject
            });
            const message = {
                id,
                method: 'get',
                action,
            };
            worker.postMessage(JSON.stringify(message));
        });
    }
}
export default RestWorkerClient;
