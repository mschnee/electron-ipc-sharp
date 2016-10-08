import { RestClient } from '../RestClient/index';

let uniqueRequestId: number = 1;
let worker: Worker;

interface WorkerRequestMessage {
    id: number;
    method: string;
    action: string;
    data?: string;
}

interface WorkerRequestResponse {
    id: number;
    success: boolean;
    response: string;
}

export class RestWorkerClient extends RestClient  {
    promiseMap: Map<number, {resolve: any, reject: any}> = new Map();

    timeouts: Set<number>;

    construstor() {
         if (!worker) {
             worker = new Worker('RestClientWorker.js');
         }
         worker.addEventListener('response', this.handleResponse);
     }

     private handleResponse = (ev: MessageEvent) => {
         const r:WorkerRequestResponse = JSON.parse(ev.data);
         if (r.id && this.promiseMap.has(r.id)) {
             const handlers = this.promiseMap.get(r.id);
             this.promiseMap.delete(r.id);

             if (r.success) {
                 handlers.resolve(r.response)
             } else {
                 handlers.reject(r.response);
             }
         }
     };

     public get<ClientResponse>(action: string): Promise<ClientResponse> {
        return new Promise<ClientResponse>((_resolve, _reject) => {
            const id = ++uniqueRequestId;
            this.promiseMap.set(id, {
                resolve: _resolve,
                reject: _reject
            });

            const message: WorkerRequestMessage = {
                id,
                method: 'get',
                action,
            };
            worker.postMessage(JSON.stringify(message));
        });
    }
}

export default RestWorkerClient;