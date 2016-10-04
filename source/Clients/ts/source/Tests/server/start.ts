import * as express from 'express';

let app = express();

app.get('/', (request: express.Request, response: express.Response) => {
    console.log('what');
    response.status(200).send('get');
});

app.put('/', (request: express.Request, response: express.Response) => {
    response.status(200).send('put');
});

const server = app.listen(40500, () => {
    console.log('HTTP server listening on port 40500')
});
