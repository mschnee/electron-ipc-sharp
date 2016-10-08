import { Client } from '../lib/Client';

declare type FetchFunction = (url: RequestInfo, init?: RequestInit) => Promise<Response>;
export interface RestClientOptions {
    endpoint: string;
    useWorkerIfAvailable?: boolean;
}


export class RestClient implements Client {
    protected endpoint: string;
    protected authentication: string;

    constructor(options: RestClientOptions) {
        this.endpoint = options.endpoint;
    }

    public setAuthorization(auth: string) {
        this.authentication = auth;
    }

    public get<ClientResponse>(action: string): Promise<ClientResponse> {
        return new Promise<ClientResponse>((_resolve, _reject) => {
            fetch(`${this.endpoint}${action}`, {
                method: 'GET',
                headers: this.getHeaders(),
            }).then((response: Response) => {
                response.json().then(_resolve).catch(_reject);
            }).catch(_reject);
        });
    }

    public put<ClientResponse>(action: string, data: any): Promise<ClientResponse> {
        return new Promise<ClientResponse>((_resolve, _reject) => {
            fetch(`${this.endpoint}${action}`, {
                method: 'PUT',
                headers: this.getHeaders(),
            }).then((response: Response) => {
                response.json().then(_resolve).catch(_reject);
            }).catch(_reject);
        });
    }

    public post<ClientResponse>(action: string, data: any): Promise<ClientResponse> {
        return new Promise<ClientResponse>((_resolve, _reject) => {
            fetch(`${this.endpoint}${action}`, {
                method: 'POST',
                headers: this.getHeaders(),
                body: data
            }).then((response: Response) => {
                response.json().then(_resolve).catch(_reject);
            }).catch(_reject);
        });
    }

    public delete<ClientResponse>(action: string): Promise<ClientResponse> {
        return new Promise<ClientResponse>((_resolve, _reject) => {
            fetch(`${this.endpoint}${action}`, {
                method: 'DELETE',
                headers: this.getHeaders(),
            }).then((response: Response) => {
                response.json().then(_resolve).catch(_reject);
            }).catch(_reject);
        });
    }

    protected getHeaders(): Headers {
        let h = new Headers();
        if (this.authentication) {
            h.append('Authorization', this.authentication);
        }
        h.append('Content-Type', 'text/json');
        return h;
    }
}
