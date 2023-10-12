require('express-async-errors');

const express = require('express');

const AppError = require('./utils/AppError');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

app.use(router);

app.listen(3333, () => {
    console.log('http://localhost:3333');
});