var express = require('express');

let app = express();

app.get('/', (request, response) => {
    console.log('what');
    response.status(200).send('get');
});

app.put('/', (request, response) => {
    response.status(200).send('put');
});

const server = app.listen(40500, () => {
    console.log('HTTP server listening on port 40500')
});
