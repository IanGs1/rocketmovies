require('express-async-errors');

const express = require('express');

const AppError = require('./utils/AppError');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use((error, request, reply, next) => {
    if (error instanceof AppError) {
        return reply.status(statusCode).json({
            status: 'error',
            message: error.message
        });
    }

    return reply.status(500).json({
        status: 'error',
        message: error.message
    })
});

app.use(router);

app.listen(3333, () => {
    console.log('http://localhost:3333');
});