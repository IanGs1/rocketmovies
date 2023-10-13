require('express-async-errors');

const express = require('express');

const AppError = require('./utils/AppError');
const router = require('./routes');

const cors = require('cors');

const uploadConfig = require('./configs/upload');

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use('/files', express.static(uploadConfig.UPLOAD_FOLDER));

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

app.listen(3333, () => {
    console.log('http://localhost:3333');
});