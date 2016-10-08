export class RestClient {
    constructor(options) {
        this.endpoint = options.endpoint;
    }
    setAuthorization(auth) {
        this.authentication = auth;
    }
    get(action) {
        return new Promise((_resolve, _reject) => {
            fetch(`${this.endpoint}${action}`, {
                method: 'GET',
                headers: this.getHeaders(),
            }).then((response) => {
                response.json().then(_resolve).catch(_reject);
            }).catch(_reject);
        });
    }
    put(action, data) {
        return new Promise((_resolve, _reject) => {
            fetch(`${this.endpoint}${action}`, {
                method: 'PUT',
                headers: this.getHeaders(),
            }).then((response) => {
                response.json().then(_resolve).catch(_reject);
            }).catch(_reject);
        });
    }
    post(action, data) {
        return new Promise((_resolve, _reject) => {
            fetch(`${this.endpoint}${action}`, {
                method: 'POST',
                headers: this.getHeaders(),
                body: data
            }).then((response) => {
                response.json().then(_resolve).catch(_reject);
            }).catch(_reject);
        });
    }
    delete(action) {
        return new Promise((_resolve, _reject) => {
            fetch(`${this.endpoint}${action}`, {
                method: 'DELETE',
                headers: this.getHeaders(),
            }).then((response) => {
                response.json().then(_resolve).catch(_reject);
            }).catch(_reject);
        });
    }
    getHeaders() {
        let h = new Headers();
        if (this.authentication) {
            h.append('Authorization', this.authentication);
        }
        h.append('Content-Type', 'text/json');
        return h;
    }
}
