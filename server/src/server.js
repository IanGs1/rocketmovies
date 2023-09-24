const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (request, reply) => {
    reply.send('<h1>Hello World!</h1>');
});

app.listen(3333, () => {
    console.log('http://localhost:3333');
});